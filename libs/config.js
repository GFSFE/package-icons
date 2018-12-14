/**
 * &#xE600
 * 代码分解: 字体图标由 &# 和 x 以及四个数字或字母组成;
 * 其中 &# 表示这是字符实体，x 表示这是十六进制
 * 刚好伪元素的 content 接受的也是十六进制的 Unicode 编码
 * Unicode 私有区域: E000~F8FF (57344~63743)
 */

module.exports = {
    fontName: 'icon-font',
    source: './icons',
    target: './dist',
    fontFileName: 'font',
    startUnicode: 0XE000,
    classPrefix: 'icon-',
    minifySvg: true
}
