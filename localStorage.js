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

var email = document.getElementById("email-input");
var pass = document.getElementById("pass-input");

if (localStorage.getItem("user")) {
  var myUser = JSON.parse(localStorage.getItem("user"));
  email.style.display = "none";
  pass.style.display = "none";
  document.getElementById("btn").style.display = "none";
  var heading = document.createElement("h1");
  heading.innerHTML = `
    WELCOME BACK - ${myUser.email}
    `;
  document.body.appendChild(heading);
}

document.getElementById("btn").addEventListener("click", () => {
  var emailVal = email.value;
  var passVal = pass.value;
  //   localStorage.setItem("email", emailVal);
  //   localStorage.setItem("pass", passVal);
  var user = {
    email: emailVal,
    pass: passVal,
  };
  localStorage.setItem("user", JSON.stringify(user));
  location.reload();
});

document.getElementById("logout-btn").addEventListener("click", () => {
  //   localStorage.removeItem("email");
  //   localStorage.removeItem("pass");
  localStorage.removeItem("user");
  location.reload();
});
