// console.log("Prototypal Inheritence");

// let arr = [1, 2, 3];
// console.log(arr);

// class GrandParent {
//   constructor() {
//     this.superSurname = "hi";
//   }

//   grandPrentSpeak() {
//     return "grand parent is speaking ";
//   }
// }

// class Parent extends GrandParent {
//   constructor(surname) {
//     super();
//     this.surname = surname;
//   }
//   parentSpeak() {
//     return "parent is speaking";
//   }
// }

// class Child extends Parent {
//   constructor(firstname, surname) {
//     super(surname);
//     this.firstname = firstname;
//   }
//   childSpeak() {
//     return "child is speaking";
//   }
// }

// var me = new Child("Avi", "Vashishta");
// console.log(me);

// console.log(me.childSpeak());
// console.log(me.parentSpeak());
// console.log(me.grandPrentSpeak());

// var obj = { name: "hi" };
// console.log(obj);

// Problem statement is make parent obj the parent of child obj

const grandParent = {
  grandParentSpeak: function () {
    return "Grand Parent is speaking";
  },
};

const parent = {
  lastname: "Vashishta",
  parentSpeak: function () {
    return "Parent is speaking";
  },
  __proto__: grandParent,
};

const child = {
  firstname: "Avi",
  childSpeak: function () {
    return "Child is speaking";
  },
  __proto__: parent,
};

console.log(child);
console.log(child.lastname);

var obj1 = { hi: "hi" };
console.log(obj1);
