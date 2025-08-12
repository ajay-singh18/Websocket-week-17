import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port:8080})

wss.on("connection",function(socket){
    console.log("user connected");
    // setInterval(()=>{
    //         socket.send("The current price of solona is "+ Math.random())
    // },500)    
    socket.on("message",function(e){
        if(e.toString()=="ping"){
            socket.send("pong")
        }
    })
})