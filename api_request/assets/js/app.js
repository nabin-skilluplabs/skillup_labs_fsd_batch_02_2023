(async () => {
    const apiUrl = `https://v2.jokeapi.dev/joke/Programming,Misc?amount=${document.getElementById('amount')}`;
    document.getElementById('amount')
    const repsonse = await fetch(apiUrl);
    const jokesData = await respose.json();
    console.log(jokeData);
    console.log(`Category: ${jokeData.category}`);
    
    if(jokeData.type === "single"){
        console.log(`joke: ${jokeData.joke}`);

    }else {
        console.log(`joke: $(jokeData.setup) /n ${jokeData.delivery}`);
    
    }

    
})();

function poplateJoke(joke){
    let jokeString = "";
    if (joke.type === "single"){
        jokeString = joke.joke;

    }else {
        jokeString = `${joke.setup} /n ${joke.delivery}`;
    document.getElementById("joke_list").innerHTML = `<h2>${joke.joke}</h2>`;
}

async function loadJokes (){
    const amount = document.getElementById('amount').ariaValueMax;
    console.log({amount});
    const apiUrl = `https://v2.jokeapi.dev/joke/Programming,Misc?amount=${amount}`;
    const repsonse = await fetch(apiUrl);
    const jokesData = await respose.json();
    if(jokesData.type){
        jokeData.jokes.forEach(element => {
            populateJoke(joke);
        });
    }else{
        poplateJoke(jokeData);
    }
}