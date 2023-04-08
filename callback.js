// console.log("Callback Fncs");

function sayHello(callback) {
  console.log("Hi");
  callback();
  console.log("Bye 2");
}

function sayBye() {
  console.log("Bye");
}

sayHello(sayBye);

// In Theory -> A callback fnc, is nothing but it is a function that gets passed as a parameter and gets called inside another fnc.

// sayHello
// sayHello()

// Problem Statement -> You own a restaurant, create a Restaurant System for your restaurant.

// 1000 -> 1500 -> 2000 -> 3000 -> 0
// Greet() -> takeOrder() -> giveFood() -> takePayment() -> Thankyou()
// Greet() 'THEN' takeOrder() 'THEN' giveFood() 'THEN' takePayment() 'THEN' Thankyou()

// Callback Hell or the pyramid of doom

function greet(takeOrder) {
  console.log("Say Hello");
  takeOrder(giveFood);
}

function takeOrder(giveFood) {
  // take order from user
  var order = true;
  //   var order = prompt("Please enter your order");
  console.log("Taking Order....");
  if (order) {
    console.log("Your order is", order);
    giveFood(takePayment);
  } else {
    thankyou();
  }
}

function giveFood(takePayment) {
  console.log("Giving Food...");
  takePayment(thankyou);
}

function takePayment(thankyou) {
  var payment = "success";
  console.log("Please pay for your food");
  if (payment == "success") thankyou();
}

function thankyou() {
  console.log("Thanks for coming, please come again");
}

greet(takeOrder);

// greet();
// takeOrder();
// giveFood();
// takePayment();
// thankyou();

// Recursion
// function sayHello(callback) {
//   console.log("Hello");
//   callback(callback);
// }

// sayHello(sayHello);
