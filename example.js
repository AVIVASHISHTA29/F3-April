let addition = (a, b) => {
  var promise = new Promise((resolve) => {
    console.log(`addition is start: ${a} + ${b} : 🍷`);
    setTimeout(() => {
      let c = a + b;
      console.log(`addition is end :`, c);
      resolve(c);
    }, 2000);
  });
  return promise;
};

let Subtraction = (val) => {
  var promise = new Promise((resolve, reject) => {
    console.log(`subtraction is start : ${val} : 🍷`);
    setTimeout(() => {
      let c = val - 10;
      console.log("subtraction is end", c);
      resolve(c);
    }, 2000);
  });
  return promise;
};

let multiplication = (val) => {
  var promise = new Promise((resolve) => {
    console.log(`multiplication is start : ${val}  : 🍷`);
    setTimeout(() => {
      let c = val * 5;
      console.log("multiplication is end", c);
      resolve(c);
    }, 2000);
  });
  return promise;
};

let division = (val) => {
  var promise = new Promise((resolve) => {
    console.log(`division is start: ${val}  : 🍷`);
    setTimeout(() => {
      let c = val / 2;
      console.log("division is end", c);
      resolve(c);
    }, 2000);
  });
  return promise;
};

let print_ans = (val) => {
  console.log(`please wait for sometime until calculation is not done`);
  setTimeout(() => {
    console.log(`ans is ${val} let's have some party 👻👽👹👺`);
  }, 5000);
};

// addition(5, 20)
//   .then((res1) => {
//     return Subtraction(res1);
//   })
//   .then((res2) => {
//     return multiplication(res2);
//   })
//   .then((res3) => {
//     return division(res3);
//   })
//   .then((res4) => {
//     return print_ans(res4);
//   })
//   .catch((err) => {
//     console.log("err is in the code", err);
//   });

async function handlePromiseChain() {
  try {
    console.log("Handling...");
    const res1 = await addition(5, 20);
    const res2 = await Subtraction(res1);
    const res3 = await multiplication(res2);
    const res4 = await division(res3);
    print_ans(res4);
  } catch (err) {
    console.log("ERROR");
  }
}

handlePromiseChain();
