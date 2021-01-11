const getFavoriteJokes = () => {
  return(JSON.parse(localStorage.getItem('favoriteJokes')))
}

const getUserJokes = () => {
  return(JSON.parse(localStorage.getItem('jokes')))
}

export { getFavoriteJokes, getUserJokes }