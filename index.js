const WebSocket = require("ws")

const ws = new WebSocket("ws://46.4.32.181:8080")
ws.onmessage= (msg) => console.log(msg.data);