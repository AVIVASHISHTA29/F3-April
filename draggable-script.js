let id = "";

function allowDrop(ev) {
  ev.preventDefault();
}

function dragStart(event) {
  id = event.target.id;
  console.log("Started dragging", event.target);
}

function drop(ev) {
  ev.preventDefault();
  document.getElementById("div1").appendChild(document.getElementById(id));
}
