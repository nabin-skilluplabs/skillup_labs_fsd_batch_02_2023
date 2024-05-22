(async () => {
  const apiUrl = "https://v2.jokeapi.dev/joke/Programming,Misc";
  const response = await fetch(apiUrl);
  const jokeData = await response.json();
  console.log(jokeData);
  console.log(`Category: ${jokeData.category}`);

  if (jokeData.type === "single") {
    console.log(`Joke: ${jokeData.joke}`);
  } else {
    console.log(`Joke: ${jokeData.setup} \n ${jokeData.delivery}`);
  }
  // Create a number input which takes number of jokes to grab,
  // Create LOAD JOKES button, when clicked should load jokes using jokes api
  // Populate those jokes in UI
})();

function populateJoke(joke) {
  let jokeString = "";
  if (joke.type === "single") {
    jokeString = joke.joke;
  } else {
    jokeString = `${joke.setup} <br> ${joke.delivery}`;
  }
  document
    .getElementById("joke_list")
    .insertAdjacentHTML("beforeend", `<h2>${jokeString}</h2>`);
}

async function loadJokes() {
  const amount = document.getElementById("amount").value;
  const apiUrl = `https://v2.jokeapi.dev/joke/Programming,Misc?amount=${amount}`;
  const response = await fetch(apiUrl, {
    method: "GET",
  });
  const jokeData = await response.json();
  document.getElementById("joke_list").innerHTML = "";
  if (jokeData.jokes) {
    jokeData.jokes.forEach((joke) => {
      populateJoke(joke);
    });
  } else {
    populateJoke(jokeData);
  }
}
