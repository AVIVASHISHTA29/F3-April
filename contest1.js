//  3 ways
// Without array - but with += innerHTML
// with array - appendChild
// with array - innerHTML

var nameInput = document.getElementById("name");
var professionInput = document.getElementById("profession");
var ageInput = document.getElementById("age");

nameInput.addEventListener("change", function (event) {
  console.log("event", event);
});

var button = document.getElementById("adduser");

button.addEventListener("click", (event) => {
  console.log(event);
    var name = nameInput.value;
    var profession = professionInput.value;
    var age = ageInput.value;

    if (name == "" || profession == "" || age == "") {
      document.querySelector(".status-msg").style.display = "block";
      document.querySelector(".status-msg").style.color = "red";
    } else {
      document.querySelector(".emp-li-container").innerHTML += `
          <div class="emp-card" id="id-${name}-${profession}-${age}">
              <div class="details">
                  <span>Name: ${name}</span>
                  <span>Profession: ${profession}</span>
                  <span>Age: ${age}</span>
              </div>
              <button id="del-user-btn" onclick="deleteUser('id-${name}-${profession}-${age}')">Delete User</button>
          </div>
      `;
    }
});

function deleteUser(id) {
  var userToDel = document.getElementById(id);
  console.log(userToDel);
  document.querySelector(".emp-li-container").removeChild(userToDel);
  alert("User deleted");
}
