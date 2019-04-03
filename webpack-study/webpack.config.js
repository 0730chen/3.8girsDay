const path = require('path')
const webpack = require('webpack')
// 导入内存中生成html的插件
// 基于node的webpack 就是一个JS文件，通过node操作向外暴露一个配置对象
const htmlWebpackFlugin = require('html-webpack-plugin')
module.exports ={
     //入口
     entry: path.join(__dirname,'/src/main.js'),//表示要打包的文件
     
    //出口
     output: {
     	path:path.join(__dirname,'./dist'),
     	filename:'bundle.js'


     },
     // plugins: {
     // 	new htmlWebpackFlugin({
     // 	  //创建在内存中生成html的参数
     // 	  template: path.join(__dirname,'./src/index.html'),//指定生成的模板页面,根据指定的路径页面生成内存中页面

     // 	  filename:'index.html'//指定生成页面的名称
     // 	})
     // },
     //用于配置所有的第三方模块加载器
     module:{
     	rules:[ //第三方模块匹配规则 使用正则匹配css后缀文件,处理css文件的loader模块
         {test: /\.css$/, use:['style-loader','css-loader']}
     	]
     }

}