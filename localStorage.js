// 3 TYPES OF STORAGES -
// Local Storage - Permanent
// Session Storage - Session

// var email = "avi@gmail.com";
// var pass = "1234";

// console.log(email, pass);

// Preserve a state, no matter what

// localStorage.setItem("name", "avi");
// localStorage.setItem("abc", "def");
// localStorage.setItem("email", "avi@gmail.com");
// localStorage.setItem("token", "12345");

// console.log(localStorage.getItem("name"));

// localStorage.setItem("name", "avi2");
// localStorage.removeItem("name")

// var email = document.getElementById("email-input");
// var pass = document.getElementById("pass-input");

// if (localStorage.getItem("user")) {
//   var myUser = JSON.parse(localStorage.getItem("user"));
//   email.style.display = "none";
//   pass.style.display = "none";
//   document.getElementById("btn").style.display = "none";
//   var heading = document.createElement("h1");
//   heading.innerHTML = `
//     WELCOME BACK - ${myUser.email}
//     `;
//   document.body.appendChild(heading);
// }

// document.getElementById("btn").addEventListener("click", () => {
//   var emailVal = email.value;
//   var passVal = pass.value;
//   // localStorage.setItem("email", emailVal);
//   //   localStorage.setItem("pass", passVal);
//   var user = {
//     email: emailVal,
//     pass: passVal,
//   };
//   localStorage.setItem("user", JSON.stringify(user));
//   location.reload();
// });

// document.getElementById("logout-btn").addEventListener("click", () => {
//   //   localStorage.removeItem("email");
//   //   localStorage.removeItem("pass");
//   localStorage.removeItem("user");
//   location.reload();
// });

// sessionStorage.setItem("name", "Avi");
// console.log("sessionStorage", sessionStorage.getItem("name"));
// // sessionStorage.removeItem("name");

// sessionStorage.setItem("arr", JSON.stringify([1, 2, 3, 4]));

// getting cookie = document.cookie

console.log(document.cookie);

// convert string into a list

console.log(document.cookie.split("; "));

// document.cookie.split("; ").forEach((cookie) => {
//   var val = cookie.split("=");
//   var key = val[0];
//   var value = val[1];
//   var obj = {};
//   obj[key] = value;
//   console.log(obj);
// });

// setting cookie => document.cookie = "key=value;"

// document.cookie = "age=21";
// document.cookie = "cookie1=blah";

// var user = { name: "avi", job: "instructor" };

// document.cookie = `user=${JSON.stringify(user)}`;

// var now = new Date();
// var time = now.getTime();
// var expireTime = time + 10000;
// now.setTime(expireTime);

// document.cookie = "phone=9999999999;expires=" + now.toUTCString();

// Hashing
// 123 -> sajhdgsfsakmjhsgyaxuhhsabgvbhgxvw2323!@#$##
// 124 -> sasa njasgvfascjhdgsfsakmjhsgyaxuhhsabgvbhgxvw2323!@#$##
