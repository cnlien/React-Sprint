import React, {useState, useEffect} from 'react';
import CharacterCard from './characterCard.js'
import axios from 'axios';
import './StarWars.css'

const CharacterInfo = () => {
  const [charData, setCharData] = useState('');

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const charList = await axios.get(
  //         'https://swapi.co/api/people/'
  //       );
  //       setCharData(charList.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // },[]);
  useEffect(() => {
    axios.get('https://swapi.co/api/people/1')
    .then (res => {
      const characters = res.data;
      console.log(characters);
      setCharData(characters);
    })
    .catch(err => {console.log(err);});
  },[]);

  // return(
  //   <div className='character'>
  //     {charData.map(character => {
  //       return(
  //         <CharacterCard
  //         name = {charData.name}
  //         gender={charData.gender}
  //         height={charData.height}
  //         mass={charData.mass}
  //         />
  //         );
  //       })
  //     } 
  //   </div>
  // )

  return(
    <div className='character'>
      <CharacterCard
      name = {charData.name}
      gender={charData.gender}
      height={charData.height}
      mass={charData.mass}
      />
    </div>
  )
}

export default CharacterInfo;
