// The JS that we write is something that is powered by the browser
console.log("Dom Intro");
var name = "Avi";

console.log(document);

// Whatever HTML CODE I WRITE, I CAN HAVE ACCESS ON IT THROUGH MY SCRIPTS
document.body.style.backgroundColor = "#000";
document.body.style.color = "#fff";

var myHeading = document.getElementById("heading1");
console.log("My Element", myHeading);

var elements = document.getElementsByClassName("heading");
// var arrayElements = Array.from(elements);

// var myHeading = document.querySelector("#heading1");
console.log("My Heading", myHeading);

console.log(elements);
console.log("My Elements", elements[0], elements[1]);

// Problem statement -> On the click of the button run this function

function abc() {
  console.log("Button was clicked!");
  console.log(10 * 20);
  document.body.style.backgroundColor = "orange";
  //   alert("Hi");
}

function helloWorldFnc() {
  console.log("Hello World!");
}
