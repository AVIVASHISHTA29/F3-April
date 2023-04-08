// console.log("Promises");

// What is a promise?
// What was the need of a promise?

// Person A, Person B
// Person A gives 20/- Person B.
// Person B says that I PROMISE I'll give this money back in 10 days.
// Person B Gives A `PROMISE` TO PERSON A

// What does person A have? Person A just has a `promise`.
// What can person A do?

// Person A will wait for 10 days

// WHEN PERSON A GETS THE MONEY 'THEN' person A will go a buy a chocolate

// When Person A DOES NOT GEt the money 'THEN' person A will go to the police.

// The only two things possible -> success or failure. (resolved or rejected)

// A promise is pending -> till it is either rejected or resolved.

// When I google something. I search 'cats and dogs'. Google says here is a promise. I promise that I'll give you the data.
// Then 10 seconds later, google will say here you go, or i couldnt find it

console.log("HIIII", new Date());

// resolve and reject? -> These methods return some data and change the state of my promise

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Sorry no data found");
    resolve("Here is your data...");
  }, 2000);
});

console.log("Promise", myPromise, new Date());

myPromise
  .then((data) => {
    console.log("DATA....", data);
  })
  .catch((err) => {
    console.log("CATCHING....", err);
  });

// setTimeout(() => {
//   console.log("Promise", myPromise, new Date());
// }, 3000);

// try catch block

function hello() {
  return "Hello";
  //   return "Bye";
}

// const data1 = hello();
// console.log(data1);
