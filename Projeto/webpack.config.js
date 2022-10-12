const path = require('path')
const { ModuleFilenameHelpers } = require('webpack')

ModuleFilenameHelpers.exports = {
    entry: './scr/index.js'
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js'
    }
}