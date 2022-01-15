import { useState, useEffect } from 'react'
import PokemonList from './components/PokemonList';
import getPokemons from './services/getPokemons'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    getPokemons()
    .then(results => {
      setPokemon(results)
    })
  }, [])
  
  return (
    <>
      <PokemonList pokemon={pokemon} />
    </>
  )
}

export default App;
