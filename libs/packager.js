const fs = require('fs')
const path = require('path')
const glob = require('glob')
const SVGO = require('svgo')
const fontCarrier = require('font-carrier')
const svgo = new SVGO({
	plugins: [{
			mergePaths: true
		},
		{
			convertPathData: false
		}
	]
})

function mkdirIfNotExist(dir) {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}
}

function getFiles(sourcePath) {
	const svgFolderPath = path.resolve(sourcePath + '/**/*.svg');
	const files = glob.sync(svgFolderPath)
	if (!files || files.length === 0) {
		throw new Error(`no files were found under path: ${svgFolderPath}`)
	}
	return files
}

async function getSvgFileData(file, isMinify) {
	let data = fs.readFileSync(file).toString();
	if (isMinify) {
		const result = await svgo.optimize(data);
		data = result.data;
	}
	return data;
}

function renderCss(options, cssClass) {
	const tpl = path.join(__dirname, 'templates/icon.tpl')
	const output = path.join(options.targetPath, 'icon.css')
	let content = fs.readFileSync(tpl).toString()
	content = content.replace(/{{fontName}}/g, options.fontName)
		.replace(/{{font}}/g, options.fontFileName)
		.replace(/{{timestamp}}/g, +new Date())
		.replace(/{{classPrefix}}/g, options.classPrefix)
		.replace(/{{mainContent}}/, cssClass.join('\n\n'))
	fs.writeFileSync(output, content)
	console.log('[step]', 'generate icon.css done.')
}

function renderHtml(options, htmlPreview) {
	const tpl = path.join(__dirname, 'templates/preview.tpl')
	const output = path.join(options.targetPath, 'preview.html')
	let content = fs.readFileSync(tpl).toString()
	content = content.replace(/{{mainContent}}/, htmlPreview.join('\n'))
	fs.writeFileSync(output, content)
	console.log('[step]', 'generate preview.html done.')
}

class Packager {

	constructor({
		fontName,
		source,
		target,
		fontFileName,
		startUnicode,
		classPrefix,
		minifySvg
	}) {

		this.options = {
			fontName: fontName,
			sourcePath: path.resolve(source),
			targetPath: path.resolve(target),
			fontFileName: fontFileName,
			classPrefix: classPrefix,
			minifySvg: minifySvg,
		}

		this.startCode = isNaN(parseInt(startUnicode)) ? parseInt(0XE000) : parseInt(startUnicode)
	}

	generateCode() {
		this.startCode++
		const value16 = this.startCode.toString(16)
		return {
			value16: value16,
			unicode: `&#x${value16};`
		}
	}

	async createFontFromFiles(options, files) {

		const font = fontCarrier.create()
		let cssContentList = []
		let htmlContentList = []

		for (let file of files) {

			let data = await getSvgFileData(file, options.minifySvg);
			let code = this.generateCode()
			font.setSvg(code.unicode, data)

			let className = `${options.classPrefix}${path.basename(file, '.svg')}`

			cssContentList.push(`.${className}:before { content: "\\${code.value16}"; }`)
			htmlContentList.push(`
			<div class="item-wrapper">
				<i class="${className}"></i>
				<div class="item-class">.${className}</div>
				<div class="item-code">&amp;#x${code.value16};</div>
			</div>`)
		}

		return {
			font,
			cssContentList,
			htmlContentList
		}
	}

	async run() {

		const options = this.options

		console.log(`start processing with below config: \n${JSON.stringify(options, null, 4)}`)

		mkdirIfNotExist(options.targetPath)

		const {
			font,
			cssContentList,
			htmlContentList
		} = await this.createFontFromFiles(options, getFiles(options.sourcePath))

		font.output({
			path: path.join(options.targetPath, options.fontFileName)
		})

		renderCss(options, cssContentList)
		renderHtml(options, htmlContentList)

		console.log('[step]', 'transfer svg to font successfully.')
	}


}

module.exports = Packager