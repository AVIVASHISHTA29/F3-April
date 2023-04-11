// The JS that we write is something that is powered by the browser
// console.log("Dom Intro");
// var name = "Avi";

// console.log(document);

// Whatever HTML CODE I WRITE, I CAN HAVE ACCESS ON IT THROUGH MY SCRIPTS
// document.body.style.backgroundColor = "#000";
// document.body.style.color = "#fff";

// var myHeading = document.getElementById("heading1");
// console.log("My Element", myHeading);

// var elements = document.getElementsByClassName("heading");
// var arrayElements = Array.from(elements);

// var myHeading = document.querySelector("#heading1");
// console.log("My Heading", myHeading);

// console.log(elements);
// console.log("My Elements", elements[0], elements[1]);

// Problem statement -> On the click of the button run this function

// function abc() {
//   console.log("Button was clicked!");
//   console.log(10 * 20);
//   document.body.style.backgroundColor = "orange";

// }

// function helloWorldFnc() {
//   console.log("Hello World!");
// }

// var myHeading = document.getElementById("heading2");

// console.log("Element", myHeading.parentElement);
// console.log("Node", myHeading.parentNode);

// console.log(myHeading.previousElementSibling);
// console.log(myHeading.nextElementSibling);

// var myHTML = document.getElementById("my-html");
// // paarent Element can be null
// console.log(myHTML.parentElement);
// // paarent Node can not be null -> it will return something
// console.log(myHTML.parentNode);

// console.log("Children", document.body.children);

// Select Elements with certain functions
var myHeading = document.getElementById("heading1");

// Problem statement -> Why?
// I might want to style my element.
// I might want to access it -> access its inner values or inner content
// I might want to add an event listener , CLICK

// I just want to manipulate or interact with that element

// console.log(myHeading);

// var open = false;

// function changeStyles() {
//   myHeading.style.color = "black";
//   myHeading.style.textTransform = "uppercase";
//   myHeading.style.backgroundColor = "orange";
//   myHeading.style.textAlign = "center";
//   myHeading.style.border = "2px solid red";
//   // if (!open) {
//   //   open = true;
//   //   document.getElementById("hamburger").style.display = "block";
//   // } else {
//   //   open = false;
//   //   document.getElementById("hamburger").style.display = "none";
//   // }

//   if (document.getElementById("hamburger").style.display == "none") {
//     document.getElementById("hamburger").style.display = "block";
//   } else {
//     document.getElementById("hamburger").style.display = "none";
//   }
// }

// myHeading.style.cssText =
//   "background-color:pink;font-size:55px;border:2px dashed green;color:white;";
// text-transform -> textTransform

var myPTag = document.getElementById("myPTag");

function login() {
  // var myEmailInput = document.getElementById("my-email-input");
  // var myPassInput = document.getElementById("my-pass-input");

  // console.log(myPassInput, myEmailInput);
  var userEmailVal = document.getElementById("my-email-input").value;
  var passEmailVal = document.getElementById("my-pass-input").value;

  var maskPass = "XXXX" + passEmailVal.slice(-1);
  // var userInput = {
  //   email: userEmailVal,
  //   password: passEmailVal,
  // };

  // console.log("userInput...", userInput);

  // DOES LOGIN FUNCTIONAL

  myPTag.innerText = `Email Enterred By User is ${userEmailVal} & Password enterred is ${maskPass}`;
}

// A task to create a calculator

console.log(myPTag);
console.log(myPTag.innerText);
