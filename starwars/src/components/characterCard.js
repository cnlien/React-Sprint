import React from 'react';
import './StarWars.css'

const CharacterCard = (props) => {
  return (
    <div className="charCard">
      <div className="cardHeader">
        <h1>{props.name}</h1>
      </div>

      <div className="cardBody">
        <p>{props.gender} | {props.height} cm | {props.mass} kg</p>
      </div>

    </div>
  )
}

export default CharacterCard;
