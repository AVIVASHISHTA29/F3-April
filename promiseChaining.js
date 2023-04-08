console.log("Promise Chaining");

// Problem statement is, you go to a salon, you want to get your hair cut
// Waiting time is of 2000 milliseconds.
// Your haircut takes 3000 milliseconds.
// You have to create promises

// Wait() THEN getHaircut() THEN Pay()
// Wait() -> getHaircut() -> Pay()

// function myString() {
//   return [1, 2, 3];
//   return "Hi This is a string";
//   return { name: "Avi", age: 21 };
//   return true;
//   return 10;
// }

// console.log(myString());

function waitFnc() {
  console.log("Enterred Shop", new Date());
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      //   resolve("Waiting in line....");
      reject("No Seats Left");
    }, 2000);
  });
}

function getHaircut() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Haircut Done");
      //   reject("Barber has to go for lunch ");
    }, 3000);
  });
}

function pay() {
  console.log("PAYMENT DONE!");
}

function backgroundMusic() {
  console.log("Playing Music");
}

// Promise Chaining -> 2 things are needed -> A fnc which returns promise and .then

// shop opens
backgroundMusic();

// shop closing -> stopMusic();

waitFnc()
  .then((data1) => {
    console.log(data1, new Date());
    return getHaircut();
  })
  .then((data2) => {
    console.log(data2, new Date());
    return pay();
  })
  .catch((err) => {
    console.log("ERROR", err);
    console.log("Sorry, Come again later");
  });
