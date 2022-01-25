import { html } from '../../node_modules/lit-html/lit-html.js'
import eventHrefClick from '../functions/eventHrefClick.js'


const moviesTemplate = ({ title, imageUrl, tickets, creatorUid }, docRefId ) => html `
  <div class="movie begin" id=${docRefId}>
    <h2>${title}</h2>
    <img src="${imageUrl}">
    <p class="tickets">Available Tickets: ${tickets}</p>
    <button  @click=${eventHrefClick} creator=${creatorUid}><a href="/buy/${docRefId}">BuyTicket</a></button>
    <button  @click=${eventHrefClick}><a href="/details/${docRefId}">Details</a></button>
  </div>`


export { moviesTemplate }