import React from 'react'
import Pokemon from './Pokemon'

export default function PokemonList({ pokemon }) {
  
  return (
    <div>
      {pokemon.map(pokemon => {
        const { name, url } = pokemon
        return <Pokemon name={name} url={url} id={url} />
      })}
    </div>
  )
}
