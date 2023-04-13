// console.log("Mapping Elements");
window.addEventListener("DOMContentLoaded", (event) => {
  var students = [
    "Avi",
    "Avi 2",
    "Avi 3",
    "Avi 4",
    "Farhin",
    "Swapnil",
    "Tarun",
    "Rodrigues",
    "Shriram",
    "Ratnasree",
  ];

  const list = document.getElementById("list");

  function renderItems(arr) {
    list.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
      list.innerHTML += `
                <li>
                    ${arr[i]}
                </li>
            `;
    }
  }

  function filterElements() {
    const searchVal = document.querySelector("#search").value.toLowerCase();
    //   var filteredArr =
    console.log(searchVal);
    var filteredElements = students.filter((item) =>
      item.toLowerCase().includes(searchVal)
    );
    renderItems(filteredElements);
  }

  renderItems(students);

  var messages = [{ message: "", author: "" }];
});

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
