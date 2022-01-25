import { db } from './sdk.js'
import { moviesTemplate } from '../views/movieTemplate.js'
import { redirectPath } from '../functions/redirectPath.js';



async function loadMovieFromBase(typeMovie) {

let itemTemplates = []
  if (typeMovie) { //TODO:
    return document.querySelector('html body div#app div#cinema div.movies')
      .innerHTML = `<h1 style="margin: auto">Base was closed! Try again tomorrow...</h1> `
    await db.collection("movies")
    .where('genres', "==", typeMovie)   
  //  .orderBy('tickets', 'desc')
    .get()
    .then((response) => {
      itemTemplates = []
      response.forEach((doc) => {
        itemTemplates.push(moviesTemplate(doc.data(), doc.id))
      })
    })
      .catch(error => console.log("Error getting documents: ", error))
  } else {

   await db.collection("movies")
    // .where("genres", "==", 'Action')
    .orderBy('tickets', 'desc')
    .get()
    .then((response) => {
      itemTemplates = []
      response.forEach((doc) => {
        itemTemplates.push(moviesTemplate(doc.data(), doc.id))
      })
    })
    .catch(error => console.log("Error getting documents: ", error))
  }
  
  console.log(itemTemplates);
  
  return itemTemplates 
}
     

export {loadMovieFromBase}

