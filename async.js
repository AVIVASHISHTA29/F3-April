// JS IS Synchronous language
// Time , Tide and Javascript waits for no one

// JS can also be `Asynchronous` - is just the absense of synchronous. It colur be running parallely, it could be taking some time to run, it could not be following the flow
// What is the colour light, darkness?

// console.log("hi0", new Date());

// setTimeout(() => {
//   console.log("hi1", new Date());
// }, 1000);

// setTimeout(() => {
//   console.log("hi2", new Date());
// }, 2000);

// setTimeout(() => {
//   console.log("hi3", new Date());
// }, 3000);

function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ data: "hello", status: "ok" });
    }, 2000);
  });
}
// Problem statment is -> Create a fnc to handle a promise

// async function myAysncFnc() {
//   console.log("my function", new Date());
//   const myPr = await myPromise().catch((err) => console.log("ERROR", err));
//   // WAIT TILL PROMISE GETS FULFILLED THEN CONSOLE IT
//   if (myPr) {
//     console.log("MY PR", myPr, new Date());
//   }
// }

async function myAsyncFnc() {
  console.log("my function", new Date());
  try {
    const myPr = await myPromise();
    // WAIT TILL PROMISE GETS FULFILLED THEN CONSOLE IT
    if (myPr) {
      console.log("MY PR", myPr, new Date());
    }
  } catch (e) {
    console.log("ERROR 2", e);
  }
}

myAsyncFnc();
