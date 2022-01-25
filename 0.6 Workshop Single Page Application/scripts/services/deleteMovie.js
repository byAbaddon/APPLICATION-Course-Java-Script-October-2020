import { docRefId } from '../functions/eventHrefClick.js'
import { redirectPath } from '../functions/redirectPath.js';
import { showMessage } from '../functions/showMessageInformation.js';
import { loadMovieFromBase } from './loadMoviesFromBase.js';
import { db } from './sdk.js'


const deleteMovie = ({ currentId }) => {
  console.log('delete :',   currentId);

  db.collection('movies')
    .doc(currentId)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!")
      showMessage('Successfully delete movie.', 'green')
      
      loadMovieFromBase()
      redirectPath('/',1000)
    }
   
  ).catch(error => console.error("Error removing document: ", error))
  


}


export {deleteMovie}