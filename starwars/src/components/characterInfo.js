import React, {useState, useEffect} from 'react';
import CharacterCard from './characterCard.js'
import axios from 'axios';
import './StarWars.css'

const CharacterInfo = () => {
  const [charData, setCharData] = useState('');

  useEffect(() => {
      axios.get('https://swapi.co/api/people/1')
      .then (res => {
        let characters = res.data;
        console.log(characters);
        setCharData(characters);
      })
      .catch(err => {console.log(err);});
    },[]);

  return(
    <div className='character'>
      <CharacterCard name = {charData.name} gender={charData.gender} height={charData.height} mass={charData.mass} />
    </div>
  )
}

export default CharacterInfo;
