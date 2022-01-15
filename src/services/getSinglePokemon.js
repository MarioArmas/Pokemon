

export default function getSinglePokemon({ url }) {

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const { sprites } = data
      console.log(sprites)
      return sprites
    })
    .catch(err => console.log(err))
}