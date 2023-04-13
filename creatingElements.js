console.log("Creating Elements");

const imgSrc =
  "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg";
// document.getElementsByTagName("body")[0].appendChild(heading);

// let arr = [1, 2, 3];

// append `4` in this array

// A. [4,1,2,3]
// B. [1,4,2,3]
// C. [1,2,4,3]
// D. [1,2,3,4]

var count = 0;

function appendElements() {
  var listItem = document.createElement("li");
  listItem.innerText = count;

  listItem.setAttribute("id", `my-id-${count}`);
  listItem.setAttribute("title", `my-title-${count}`);
  listItem.setAttribute("class", `list-item`);
  listItem.setAttribute("onclick", `removeItem("my-id-${count}")`);
  // listItem.removeAttribute("class");
  // listItem.classList.add("123");

  // listItem.classList.remove("list-item");

  // If class is there remove it, else add it
  listItem.classList.toggle("123");

  document.getElementById("list").appendChild(listItem);

  // document.getElementById("list").innerHTML += `
  //     <li class="list-item">${count}</li>
  //   `;

  // var row = document.createElement("tr");
  // row.innerHTML = `<td>${count}</td>`;
  // document.getElementById("table").appendChild(row);

  count++;
}

// var newElement = document.createElement("div");
// console.log(newElement);

// document.getElementById("list").removeChild(document.getElementById("my-id-2"));

function removeItem(id) {
  console.log("ID", id);
  let itemToBeRemoved = document.getElementById(id);
  document.getElementById("list").removeChild(itemToBeRemoved);
}
