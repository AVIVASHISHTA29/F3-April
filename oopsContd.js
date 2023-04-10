// console.log("OOPS 2 ");

// // GETTERS AND SETTERS

// // Problem Statement - While signig up just take the user's name, email and pass
// // Then later take the user's phone number

// class User {
//   age;
//   phone;
//   constructor(name, email, pass) {
//     this.name = name;
//     this.email = email;
//     this.pass = pass;
//   }

//   set setPhoneNumber(phone) {
//     if (phone.length == 10) {
//       this.phone = phone;
//     } else {
//       alert("YOUR PHONE NUMBER NEEDS TO BE equal to 10");
//     }
//   }

//   getPhoneNumberFnc() {
//     return "This is my phone Number " + this.phone;
//   }

//   get maskedPhoneNumber() {
//     return "XXXX" + this.phone.slice(-4);
//   }

//   fncPhoneNumber(phone) {
//     this.phone = phone;
//   }
// }

// var user1 = new User("Avi", "avi@gmail.com", "1234");
// // user1.fncPhoneNumber("112222332");

// user1.setPhoneNumber = "9999999999";

// console.log(user1.getPhoneNumberFnc());

// console.log(user1.phone);
// console.log(user1.maskedPhoneNumber);

// console.log(user1);

class User {
  constructor(myEmail, myPhone, myUsername, myPassword) {
    this.name = "";
    this.email = myEmail;
    this.phone = myPhone;
    this.username = myUsername;
    this.password = myPassword;
  }

  get getName() {
    return "Mr. " + this.name;
  }

  set setName(myName) {
    this.name = myName.slice(0, 1).toUpperCase() + myName.slice(1);
  }
}

var user1 = new User("avi@gmail.com", "9999", "avi_", "jshsjh");
console.log(user1);

user1.setName = "avi";

console.log(user1.getName);
