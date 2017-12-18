/*var ws = require("nodejs-websocket")

// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
	console.log("New connection")
	conn.on("text", function (str) {
		console.log("Received "+str)
		conn.sendText(str.toUpperCase()+"!!!")
	})
	conn.on("close", function (code, reason) {
		console.log("Connection closed")
	})
}).listen(8001)*/


var ws = require("nodejs-websocket")

var count = 0;

// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
	count ++;
	conn.nickname = "游客"+ count;
	server.connections.forEach(function(conn2){
		conn2.sendText(conn.nickname +"进来了!")
	})
	console.log("New connection")
	conn.on("text", function (str) {
		console.log("Received "+str)
		//conn.sendText(str.toUpperCase()+"!!!")
		server.connections.forEach(function(conn2){
			conn2.sendText(conn.nickname + ":" +str );
		})
	})
	conn.on("close", function (code, reason) {
		console.log("Connection closed")
	})
	conn.on("error",function(err){
		console.log(err);
	})
}).listen(8001)