console.log("Promise Chaining with async ");

// GREET -> TAKEORDER -> GIVEFOOD -> TAKEPAYMENT -> THANKS

function greet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("welcome");
    }, 1000);
  });
}

function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("take order");
    }, 1500);
  });
}

function givenFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: "DATA", message: "MESSAGE", status: "OK" });
    }, 2000);
  });
}

function takePayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("takePayment");
      reject({
        functionNumber: 3,
        message: "Your card didnt work properly...",
      });
    }, 3000);
  });
}

function thanks() {
  setTimeout(() => {
    console.log("thanks for visiting", new Date());
  }, 0);
}

// You need to have functions which return promises, and inside .then - you can again need to return promises..

// greet()
//   .then((data1) => {
//     console.log(data1, new Date());
//     return takeOrder();
//   })
//   .then((data2) => {
//     console.log(data2, new Date());
//     return givenFood();
//   })
//   .then((data3) => {
//     console.log(data3, new Date());
//     return takePayment();
//   })
//   .then((data4) => {
//     console.log(data4, new Date());
//     thanks();
//   })
//   .catch((err) => {
//     if (err.functionNumber == 3) {
//       console.log(
//         "Function Take Payment is faulty , here is the message ->",
//         err.message
//       );
//     }
//     console.log("sorry something is going wrong");
//     thanks();
//   });

async function handleChain() {
  console.log("Handling...");
  try {
    const data1 = await greet();
    console.log("DATA1", data1, new Date());
    const data2 = await takeOrder();
    console.log("DATA2", data2, new Date());
    const data3 = await givenFood();
    console.log("DATA3", data3, new Date());
    const data4 = await takePayment();
    console.log("DATA4", data4, new Date());
    thanks();
  } catch (err) {
    console.log(err);
  }
}

handleChain();
