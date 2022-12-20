const jokeEle = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  // call the api
  const jokeRes = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      accept: "application/json",
    },
  });

  const joke = await jokeRes.json();
  // set random joke

  jokeEle.innerHTML = joke.joke;
}
