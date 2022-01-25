import {db} from "./sdk.js"

const getAllMoviesFromBase = async () => {
  let allMoviesCollection = []

  try {
    let allMovies = await db.collection('movies').get()
    for (const movie of allMovies.docs) {
      allMoviesCollection.push(Object.assign(movie.data(), {'keyId': movie.id}))
      // console.log(movie.id, '=>', movie.data());
    }
  } catch (error) {
    console.error('Error getting documents: ', error)
  }

  return allMoviesCollection
}




export {getAllMoviesFromBase}