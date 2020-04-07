let host1 = 'http://cuncun.app.iisu.cn/server/sso/'
let host2 = 'http://cuncun.app.iisu.cn/server/data/'

//  http 请求配置项
const http = {
	//  开发者服务器接口地址
	// url: "http://localhost:3000/",
	url: "http://cuncun.app.iisu.cn/server/sso/",
	imgurl: "https://nztser.shienkeji.com/",
	//  请求的参数   
	data: {},
	//  设置请求的 header，header 中不能设置 Referer。
	header: {
		'token': uni.getStorageSync('token'),
		'X-TENANT-ID': 'cuncun:cc@2020',
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
	},
	//  （需大写）有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
	method: "POST",
	//  json    如果设为json，会尝试对返回的数据做一次 JSON.parse    
	dataType: "json",
	//  text    设置响应的数据类型。合法值：text、arraybuffer  1.7.0
	responseType: "text",
	//  收到开发者服务成功返回的回调函数    
	success() {},
	//  接口调用失败的回调函数 
	fail() {},
	//  接口调用结束的回调函数（调用成功、失败都会执行）
	complete() {},
}

module.exports = {
	http
}
