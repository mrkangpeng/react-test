/*
 * @Description: config.overrides.js
 * @Autor: kangpeng
 * @Date: 2020-03-04 10:19:44
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-05 11:45:32
 */
const {
    override,
    addWebpackPlugin,
    fixBabelImports,
    addWebpackAlias,
    addLessLoader
} = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = override(
    addWebpackPlugin(new AntdDayjsWebpackPlugin()),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addWebpackAlias({
        '@': resolve("src")
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#1DA57A'
        },
    }),

);