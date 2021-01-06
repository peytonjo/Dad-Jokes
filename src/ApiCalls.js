const getRandomJoke = () => {
  return fetch('https://icanhazdadjoke.com/')
    .then(response => response.json())
}

export { getRandomJoke }