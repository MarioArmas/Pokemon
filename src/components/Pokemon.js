import React, { useEffect, useState } from 'react'
import getSinglePokemon from '../services/getSinglePokemon'
import './Pokemon.css'

export default function Pokemon({ name, url }) {
  const [image, setSprite] = useState([])

  useEffect(() => {
    getSinglePokemon({ url })
    .then(sprite => {
      setSprite(sprite.front_default)
    })
  }, [url])

  return (
    <div className='Pokemon'>
      <h2>{name}</h2>
      <img alt={name} src={image}/>
    </div>
  )
}
