const getRandomJoke = () => {
  return fetch('https://icanhazdadjoke.com/', {
    headers: {
      "Accept": "application/json"
    }
  })
  .then(response => response.json())
}

export { getRandomJoke }