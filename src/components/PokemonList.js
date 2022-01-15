import React from 'react'
import Pokemon from './Pokemon'
import './Pokemon.css'

export default function PokemonList({ pokemon }) {
  
  return (
    <div className='PokemonList'>
      {pokemon.map(pokemon => {
        const { name, url } = pokemon
        return <Pokemon name={name} url={url} id={url} />
      })}
    </div>
  )
}
