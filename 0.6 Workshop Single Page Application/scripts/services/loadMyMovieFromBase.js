import { db } from './sdk.js'
import { html } from '../../node_modules/lit-html/lit-html.js'
import { myMoviesTemplate } from '../views/my-movies-template.js'



let itemTemplates = []

function loadMyMovieFromBase(id) {
  db.collection("movies")
  .orderBy ('tickets', 'desc')
  .get()
  .then((response) => {
    itemTemplates = []
    response.forEach((doc) => {
      if (doc.data().creatorUid == id)
          itemTemplates.push(html`${myMoviesTemplate(doc.data(), doc.id)}`)
    })
  })
    .catch((error => console.log("Error getting documents: ", error)))
  
  return itemTemplates 
}
     

export {loadMyMovieFromBase}
