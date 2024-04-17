(async () => {
    const apiUrl = "https://v2.jokeapi.dev/joke/Programming,Misc?amount=2";
    const response = await fetch(apiUrl);
    const jokeData = await response.json();
    console.log(jokeData);
    console.log(`Category: ${jokeData.category}`);

    if(jokeData.type === "single") {
        console.log(`Joke: ${jokeData.joke}`);
    }
    else {
        console.log(`Joke: ${jokeData.setup} \n ${jokeData.delivery}`)
    }
    
})();