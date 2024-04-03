//Q1 – Given a rating, display a star (*) for each full rating and a full-stop (.) for each half rating.//

function ratings(rating) {
  let ratings = "";

  for (i = 0; i < Math.floor(rating); i++) {
    ratings += "*";
    if (i !== Math.floor(rating) - 1) {
      ratings += " ";
    }
  }

  if (!Number.isInteger(rating)) {
    ratings += " .";
  }

  return ratings;
}

console.log(ratings(4.5));

//Q2 - Given an assortment of numbers, sort them out from lowest to highest\\

function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

console.log(sortNumbers([1, 3, 10, 9, 5, 2]));

//Q3 - Given an array of objects, return the prices sorted by high to low.\\

function sortPrices(prices) {
  return prices.sort((a, b) => b.price - a.price);
}

console.log(
  sortPrices([
    {
      id: 1,
      price: 50,
    },
    {
      id: 2,
      price: 0,
    },
    {
      id: 3,
      price: 100,
    },
  ])
);

//Q4 Promises question

const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video");

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("VIP");
    }, 2000)
  });
}

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus() === "VIP") {
      resolve("Show Video");
    }

    if (subscriptionStatus() === "FREE") {
      resolve("subscribe to watch");
    } 
    else{
      reject("no video");
    }
  });
}

async function main() {
    const status = await getSubscriptionStatus();
    statusRef.innerHTML = status;
    try {
        console.log(await getVideo(status));
    }
    catch (e) {
        console.log(e)
        videoRef.innerHTML = e;
    }
}

// Q5 - Get all the posts from a specific user

async function getUsers(uid) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const users = await response.json()
  const posts = users.filter(element => element.userId === uid)

  console.log(posts);
}

(getUsers(4));

// Q6 Get the first 6 incomplete todos

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  const users = await response.json()
  const todos = users.filter(element => !element.completed).slice(0, 6)

  console.log(todos);
}

getTodos();


