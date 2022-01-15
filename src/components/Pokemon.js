import React, { useEffect, useState } from 'react'
import getSinglePokemon from '../services/getSinglePokemon'
import Loading from './Loading'
import './Pokemon.css'

export default function Pokemon({ name, url }) {
  const [image, setSprite] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getSinglePokemon({ url })
    .then(sprite => {
      setSprite(sprite.front_default)
    })
    setLoading(false)
  }, [url])

  return <>
    <div className='Pokemon'>
    {
      loading
      ? <Loading />
      : <>
          <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
          <img alt={''} src={image} />
      </>
    }
    </div>
  </>
}
