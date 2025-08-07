
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket,setSocket] = useState()
  const inputText = useRef(0);
  function sendMessage(){
    if(!socket){
      return
    }
    const message = inputText.current.value
    //@ts-ignore
    socket.send(message)
  }
  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080")
    setSocket(ws)
    ws.onmessage = (e)=>{
      alert(e.data)
    }
  },[])
  return (
    <>
      <input type="text" ref={inputText} placeholder='Message...' />
      <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default App
