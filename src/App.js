import { useState, useEffect } from 'react'
import PokemonList from './components/PokemonList';
import Loading from './components/Loading';
import getPokemons from './services/getPokemons'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getPokemons()
    .then(results => {
      setPokemon(results)
    })
    setLoading(false)
  }, [])
  
  return (
    <>
    {
      loading
      ? <Loading />
      : <>
          <h1>Pokedex</h1>
          <PokemonList pokemon={pokemon} />
        </>
    }
    </>
  )
}

export default App;
