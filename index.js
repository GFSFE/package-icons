#!/usr/bin/env node

const args = require('minimist')(process.argv.slice(2))
const defaultOptions = require('./libs/config')
const Packager = require('./libs/packager')

function validateAndGetOptions(args) {

    if (!args['source'] || !args['target']){
        console.log('usage: please add required arguments [source] and [target], eg. package-icons --source ./svgs --target ./dist')
        console.log('arguments:');
        console.log('--source\t a folder path which contain svg files');
        console.log('--target\t a folder path where the result files (fonts/css/html) target to be generated');
        console.log('--class-prefix\t the icon class prefix generated in css');
        process.exit(-1)
    } else {
        const options = {
            source: args['source'],
            target: args['target'],
            ...args['class-prefix'] && {classPrefix: args['class-prefix']}
        }
        return options
    }
    
}

async function main(args) {

    const argumentOptions = validateAndGetOptions(args)
    const options = Object.assign({}, defaultOptions, argumentOptions)
    const packager = new Packager(options)
    await packager.run()
}


main(args)
    .then(() => {
        console.log('completed!!');
    })
    .catch(error => {
        console.error(error);
    })


