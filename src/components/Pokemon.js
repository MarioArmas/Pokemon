import React, { useEffect, useState } from 'react'
import getSinglePokemon from '../services/getSinglePokemon'

export default function Pokemon({ name, url }) {
  const [image, setSprite] = useState([])

  useEffect(() => {
    getSinglePokemon({ url })
    .then(sprite => {
      setSprite(sprite.back_default)
    })
  }, [url])

  return (
    <div>
      {name}
      <img alt={name} src={image}/>
    </div>
  )
}
