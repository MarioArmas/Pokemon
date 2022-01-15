
const URL = "https://pokeapi.co/api/v2/pokemon?limit=151"

export default async function apiRequest() {

  return fetch(URL)
    .then(response => response.json())
    .then(data => {
      const { results } = data
      return results
    })
    .catch(err => console.log(err))
}