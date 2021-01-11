import React from 'react'

const CreatedCard = (props) => {
  return (
    <div className="created-joke-card" id={props.joke.id}>
      {!props.joke.joke && <p>Sorry, you're not funny</p>}
      {props.joke.joke && <p className="joke">{props.joke.joke}</p>}
    </div>
  )
}

export default CreatedCard;