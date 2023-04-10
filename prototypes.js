console.log("Protoypes");

// console.log(arr);
// console.log(arr2);
// arr.push(5);
// arr.forEach((item) => console.log(item));

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  showUserName() {
    return "MY NAME IS " + this.name;
  }

  showUserEmail() {
    return "Email is - " + this.email;
  }
}

let arr2 = new Array(1, 2, 3, 4);
let myUser = new User("Avi", "avi@gmail.com");

console.log(myUser);
console.log(myUser.showUserEmail());

User.prototype.myLatestFunction = function () {
  return "Hi this is the latest fnc";
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.map = function () {
  console.log("Sorry Map doesnt work anymore :)");
};

Array.prototype.findOdd = function () {
  return this.filter((i) => i % 2 != 0);
};

let arr20392 = [12, 12, 2123, 3, 43, 34, 4, 3, 4455, 66, 11];

console.log(arr);

console.log(arr.findOdd());
console.log(arr20392.findOdd());

// DEVELOPER AT INSTRAGAM

// One Team -> take care of the browser version of instagram
// Second Team -> Instagram app on the mobile
// Third Team -> Instagram app on the tablet

// Array.prototype.filterUnreadMessages = function () {
//   // logic to filter array
// };

// let messages = [
//   { message: "hi", from: "avi", unread: true },
//   { message: "bye", from: "sunil", unread: false },
// ];

// message.filterUnreadMessages();

{
  /* <Classname>.prototype.map123 */
}
