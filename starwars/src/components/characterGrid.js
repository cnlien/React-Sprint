import React, {useState, useEffect} from 'react';
import CharacterCard from './characterCard.js'
import axios from 'axios';
import './StarWars.css'

export default function CharacterGrid() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchData () {
            try {
                const characterList = await axios.get(
                    "https://swapi.co/api/people/"
                );
                setCharacters(characterList.data);
            } catch(err) {
                console.log(err);
            }
        }
    fetchData();
    },[]);

    return (
        <div></div>
        
    )
}          



// axios.get('https://swapi.co/api/people/1')
// .then (res => {
//   let characters = res.data;
//   console.log(characters);
//   setCharData(characters);
// })
// .catch(err => {console.log(err);});
// },[]);