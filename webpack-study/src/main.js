//入口文件
//导入jquery
//ES6的代码太高，浏览器解析不了
// import $ from 'jquery'//ES6中导入模块的方式 会暴露成员，使用 import from JS模块
// 使用webpack处理
import $ from 'jquery'
import './css/index.css'

//使用import导入css样式表 默认只能处理JS文件，需要一个合适的loader，需要手动安装第三方加载器
// import './css/index.css'
$(function(){
	$('li:odd').css('backgroundColor','yellow')
	$('li:even').css('backgroundColor',function(){
		return '#'+'D97634'
	})

})