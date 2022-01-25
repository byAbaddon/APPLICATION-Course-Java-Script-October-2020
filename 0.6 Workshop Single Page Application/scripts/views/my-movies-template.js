import { html } from '../../node_modules/lit-html/lit-html.js'
import { until } from '../../node_modules/lit-html/directives/until.js';
import eventHrefClick, {docRefId, creatorId} from '../functions/eventHrefClick.js'
import { loadMyMovieFromBase } from '../services/loadMyMovieFromBase.js'
import { currentUserId } from '../functions/localeUserID.js';


const showMyMovies = () => 
  html`<div class="movies begin">${until(loadMyMovieFromBase(currentUserId()),
    html`<h1>Loading...</h1>`
    )}</div>`
  


const myMoviesTemplate = ({ title, imageUrl, tickets, creatorId }, docRefId) => html`
<div class="movie" creator-id=${creatorId} id=${docRefId}>
<div class="btn-group"></div>
    <h2>${title}</h2>
    <img src="${imageUrl}">
    <p class="tickets">Available Tickets: ${tickets}</p>
    
        <button @click=${eventHrefClick} creator=${creatorId}><a href="/edit/${docRefId}">Edit</a></button>
        <button @click=${eventHrefClick} creator=${creatorId}><a href="/delete/${docRefId}">Delete</a></button>
        <button @click=${eventHrefClick} creator=${creatorId}><a href="/buy/${docRefId}">Buy</a></button>
        <button @click=${eventHrefClick} creator=${creatorId}><a href="/details/${docRefId}">Details</a> </button>
       
    </div>
</div>`




export { showMyMovies, myMoviesTemplate}