import { Accelerometer } from "accelerometer";
import { display } from "display";
import document from "document";

const accelLabel = document.getElementById("accel-label");
const accelData = document.getElementById("accel-data");

const sensors = [];

if (Accelerometer) 
{
  const accel = new Accelerometer({ frequency: 20 });
  
  accel.addEventListener("reading", () => 
  {
    accelData.text = JSON.stringify(
    {
      x: accel.x ? accel.x.toFixed(1) : 0,
      y: accel.y ? accel.y.toFixed(1) : 0,
      z: accel.z ? accel.z.toFixed(1) : 0
    });
  });
  
  sensors.push(accel);
  accel.start();
}
else 
{
  accelData.text = "Not working";
}

// display.addEventListener("change", () => 
// {
//   // Automatically stop all sensors when the screen is off to conserve battery
//   display.on ? sensors.map(sensor => sensor.start()) : sensors.map(sensor => sensor.stop());
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////
var currentIndex = 0;

// Import the messaging module
import * as messaging from "messaging";

// Listen for the onopen event
messaging.peerSocket.onopen = function() 
{
  // Ready to send or receive messages
  console.log("Watch open success!");
  setInterval(sendMessage, 50);
}

// Send a message to the peer
function sendMessage()
{
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) 
  {
    // Send the data to peer as a message
    // messaging.peerSocket.send(sensors[0]);
    let accelData = {accelX: sensors[0].x, accelY: sensors[0].y, accelZ: sensors[0].z};
    messaging.peerSocket.send(accelData);
    // messaging.peerSocket.send("test");
  }
}