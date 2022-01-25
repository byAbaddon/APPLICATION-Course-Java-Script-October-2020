import { html } from '../../node_modules/lit-html/lit-html.js'
import { allMovieData, creatorId , docRefId, thisMovieData } from '../functions/eventHrefClick.js'
import { buyTickets } from '../services/buyTickets.js';
import { currentId, router } from '../app.js';
import { showMessage } from '../functions/showMessageInformation.js';
import { redirectPath } from '../functions/redirectPath.js';



export default () => html`${buy(currentId, thisMovieData )}`

function buy( currentId,thisMovieData) {

  if (thisMovieData) {
    const title = thisMovieData[0].textContent
    const ticketsCount = thisMovieData.find( x =>  x.className == 'tickets').textContent.match(/\d+/gi)[0] 
   
    if (ticketsCount > 0) {
      showMessage(`Successfully bought tickets ${title}`, 'green')
      //call serviceFunction buyTicket
      buyTickets(currentId, ticketsCount)
    } else {
      showMessage(`Sorry! No Tickets available for ${title}!`, 'red')
       //    //redirect  
       redirectPath('/cinema',1500)
    }

  }
}



export {buy, buyTickets}