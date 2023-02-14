import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
  
  const handleClickFetch = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data.results);
      setPokemon(data.results);
      })
    .catch((error) => {
      console.log(error);
    })
  }

  const handleClickAxios = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((res) => {
      setPokemon(res.data.results);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const handleClickAwait = async () => {
    const response = await axios("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    console.log(response.data.results);
    setPokemon(response.data.results);
  }

  return (
    <>
      <button onClick={handleClickFetch}>Fetch Pokemon</button>
      <button onClick={handleClickAxios}>Fetch Pokemon</button>
      <button onClick={handleClickAwait}>Await Pokemon</button>
      {
        pokemon.map((poke, i) => {
          const {name} = poke;
          return (
            <ul key={i}>
              <li>{name}</li>
            </ul>
          )
        })
      }
    </>
  );
}

export default App;
