// JS IS Synchronous language
// Time , Tide and Javascript waits for no one

// JS can also be `Asynchronous` - is just the absense of synchronous. It colur be running parallely, it could be taking some time to run, it could not be following the flow
// What is the colour light, darkness?

console.log("1", new Date());

setTimeout(() => {
  console.log("2", new Date());
}, 1000);

setTimeout(() => {
  console.log("3", new Date());
}, 2000);

setTimeout(() => {
  console.log("4", new Date());
}, 3000);
