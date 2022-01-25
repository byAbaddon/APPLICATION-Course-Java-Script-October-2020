import { fb, db } from './sdk.js';
import { router } from '../app.js';
import { showMessage } from '../functions/showMessageInformation.js';
import { loadMovieFromBase } from './loadMoviesFromBase.js';
import { redirectPath } from '../functions/redirectPath.js';


function buyTickets(key, ticketsCount) {
  console.log('You bought tickets');
  ticketsCount--
  db.collection("movies")
    .doc(key)
    .update({ tickets: ticketsCount})
    .catch((error) => {
      console.log("Error getting documents: ", error)   
    })
  //refresh update movie
  loadMovieFromBase()
  //redirect  
   redirectPath('/cinema')   
}
     

export {buyTickets}

