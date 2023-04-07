// console.log("OOPS");

// Why OOPS?

// var user_1_name = "Avi Vashishta";
// var user_1_profession = "Instructor";
// var user_1_gender = "Male";
// var user_1_phone = "9999999999";
// var user_1_email = "avivashishta@gmail.com";
// var user_1_history = "History";

// var user_2_name = "Sunil";
// var user_2_profession = "Student";
// var user_2_gender = "Male";
// var user_2_phone = "9999999999";
// var user_2_email = "sunil@gmail.com";
// var user_2_history = "History";

// var user_3_name = "Sunil 2";
// var user_3_profession = "Student";
// var user_3_gender = "Male";
// var user_3_phone = "9999999999";
// var user_3_email = "sunil@gmail.com";
// var user_3_history = "History";

// JSON - JavaScript Object Notation

var user1 = {
  name: "Avi",
  email: "avi@gmail.com",
  phone: "99999999",
  history: "histiry",
  gender: "male ",
};

// console.log("User1>>>", user1);

// Factory Function
function createUser(nameVal, emailVal, phoneVal, historyVal, genderVal) {
  return {
    name: nameVal,
    email: emailVal,
    phone: phoneVal,
    history: historyVal,
    gender: genderVal,
  };
}

var user2 = createUser(
  "Ajay",
  "ajay@gmail.com",
  "98888888",
  "historyt",
  "male"
);

// console.log("User2>>>", user2);

// There are multiple ways to create what we call as an object in JS.
// What is an object?

// An Object is nothing but it is an instance of a class
// What is a class? A class is a blue print.

// Every user will have a name, email,phone, history, gender --> Blueprint that I have created,

class User {
  constructor(nameVal, emailVal, phoneVal, historyVal, genderVal) {
    this.name = nameVal;
    this.email = emailVal;
    this.phone = phoneVal;
    this.history = historyVal;
    this.gender = genderVal;
  }

  getUserName() {
    return "The User's Name is " + this.name;
  }

  speak() {
    return "The User speaks their native language";
  }
}

// instead of saying key,value pair -> I will call name,email,phoone,etc. is a property

// Constructor is a function which gets called when you first initialise an object. Whenever you create an object, its constructor function gets called,
// How do you create a new object? By using the keyword new.
const user3 = new User(
  "Ajay 2",
  "ajay2@gmail.com",
  "22222222",
  "history2",
  "male 2"
);

console.log(user3.getUserName());
console.log(user3.name);

const user4 = new User(
  "Sunil",
  "sunil@gmail.com",
  "8127261219",
  "history uqyg",
  "male"
);

// console.log(user4);

// function createUser(nameVal, emailVal, phoneVal, historyVal, genderVal) {
//   return {
//     name: nameVal,
//     email: emailVal,
//     phone: phoneVal,
//     history: historyVal,
//     gender: genderVal,
//   };
// }

// console.log(user1.name, user2.name, user3.name);

// function helloWorld() {
//   return "Hello world";
// }

// console.log(helloWorld);
// console.log(helloWorld());
