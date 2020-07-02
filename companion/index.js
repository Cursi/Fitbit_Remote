// const wsUri = "wss://echo.websocket.org/";
// const wsUri = "wss://127.0.0.1";
// const wsUri = "wss://192.168.100.18";

// let websocket;

// function testWebSocket() {
//   websocket = new WebSocket(wsUri);
//   websocket.addEventListener("open", onOpen);
//   websocket.addEventListener("close", onClose);
//   websocket.addEventListener("message", onMessage);
//   websocket.addEventListener("error", onError);
// }

// function onOpen(evt) {
//   console.log("CONNECTED");
//   doSend("WebSocket rocks");
// }

// function onClose(evt) {
//   console.log("DISCONNECTED");
// }

// function onMessage(evt) {
//   console.log(`RECEIVED: ${evt.data}`);
//   // console.log("ACK");
//   // websocket.close();
// }

// function onError(evt) {
//   console.error(`ERROR: ${evt.data}`);
// }

// function doSend(message) {
//   console.log(`SEND: ${message}`);
//   websocket.send(message);
// }

// testWebSocket();

//////////////////////////////////////////////////////////////////////////////////////////////////
var oneSecondAgoIndex = 0;
var lastReceivedIndex = 0;

// Import the messaging module
import * as messaging from "messaging";

// Listen for the onopen event
messaging.peerSocket.onopen = function() 
{
  // Ready to send or receive messages
  console.log("Companion open success!");
  setInterval(() =>
  {
    console.log("Companion: " + String((lastReceivedIndex - oneSecondAgoIndex)) + " fps");
    oneSecondAgoIndex = lastReceivedIndex;
  }, 1000);
}

// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) 
{
  // Output the message to the console
  lastReceivedIndex++;

  // console.log("Companion: " + JSON.stringify(evt.data));
}