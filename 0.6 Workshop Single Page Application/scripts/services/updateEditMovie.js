import { db } from './sdk.js';
import { showMessage } from '../functions/showMessageInformation.js';
import { loadMovieFromBase } from './loadMoviesFromBase.js';
import { redirectPath } from '../functions/redirectPath.js';


function editMove(movie, key) {
  console.log('EditSuccess');
  db.collection("movies")
    .doc(key)
    .set(movie)
    .catch((error) => {
      console.log("Error getting documents: ", error)   
    })
    showMessage('Edit movie was success!', 'green')
  
  //refresh update movie
  loadMovieFromBase()
  //redirect  
   redirectPath('/')   
}
     

export {editMove}