console.log("fetching data");

// Promise Chain?
// fetch is a function that allows me to fetch data from a URL
// fetch return s a promise
// response is not the actual response that you need. It is actually a response object.
// and you need to say response.json() to get the data

// inbuilt function that returns a promise which resolves into data

fetch("https://dummyjson.com/products/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("DATA", data);
    // console.log(data.quote);
    // console.log(data.author);
  });
