console.log("fetching data");

// Promise Chain?
// fetch is a function that allows me to fetch data from a URL
// fetch return s a promise
// response is not the actual response that you need. It is actually a response object.
// and you need to say response.json() to get the data

// inbuilt function that returns a promise which resolves into data

fetch("https://dummyjson.com/quotes/1", { method: "GET" })
  .then((response) => {
    console.log("Resonse object", response);
    return response.json();
  })
  .then((data) => {
    console.log("DATA", data);
    let quotesArr = data.quotes;
    console.log("QUOTES", quotesArr);

    quotesArr.forEach((data) => {
      document.getElementById("my-div").innerHTML += `
        <h2>${data.id} - ${data.author}</h2>
        <p>${data.quote}</p>
    `;
    });
  })
  .catch((err) => {
    console.log("ERROR", err);
  });

// fetch("url")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("DATA", data);
//   });

// let url = "https://dummyjson.com/products/add";
// POST is used when you want to create.
// example - Post something on instagram

// let options = {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "BMW Pencil 2",
//     description: "Pencil for people who drive BMWs",
//     price: 1000000,
//     discountPercentage: 0.0,
//     rating: 5.0,
//     stock: 10,
//     brand: "BMW 2",
//     category: "pencils",
//   }),
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// update
// let url = "https://dummyjson.com/products/1";

// let options = {
//   method: "PUT" /* or PATCH */,
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "Avi",
//     price: 10000,
//   }),
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// var obj = '{"name":"avi","id":1}';
// console.log(obj);
// console.log(JSON.parse(obj));
