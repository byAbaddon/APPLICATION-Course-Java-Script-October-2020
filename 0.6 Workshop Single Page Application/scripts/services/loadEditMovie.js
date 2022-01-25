import { html } from '../../node_modules/lit-html/lit-html.js'
import { db } from '../services/sdk.js'
import { editMovieTemplate } from '../views/edit-movie-template.js'


async function loadEditMovie(currentId) {
  let promise = await db.collection('movies').doc(currentId).get()
    .then(res => res.data())
    .catch(er => console.log("Error getting documents: ", er.error))

  const { title, imageUrl, description, genres, tickets} = promise
  return  editMovieTemplate(title, imageUrl, description, genres, tickets, currentId ) 
 
}


export { loadEditMovie }





