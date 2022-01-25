import { router } from '../app.js';
import { db }  from '../services/sdk.js'
import { loadMovieFromBase } from './loadMoviesFromBase.js';


const addMovieToDataBase = (movie) => db.collection('movies').add(movie)
  .then((docRef) => {
     console.log("Document written with ID: ", docRef.id)
    loadMovieFromBase()
    history.pushState('',{},'/cinema')
    router('/cinema')
})
.catch((error) => {
  console.error("Error adding document: ", error)
});




export {addMovieToDataBase}