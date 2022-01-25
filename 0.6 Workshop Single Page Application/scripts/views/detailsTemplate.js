import { html } from '../../node_modules/lit-html/lit-html.js'
import eventHrefClick, { docRefId } from '../functions/eventHrefClick.js'


const detailsTemplate = (title, imageUrl, description, genres, tickets, creatorUid, docRefId ) => html`
 <div id="detailsMovie begin" id=${docRefId} creator=${creatorUid}>
    <h1>Details</h1>
    <div class="movie">
        <h2>Title: ${title}</h2>
        <img src=${imageUrl}>
        <p>${description}</p>
        <h2>Genres</h2>
        <ul class="genres">
            <li>${genres}</li>
        </ul>
        <p class="tickets">Available Tickets: ${tickets}</p>
        <button  @click=${eventHrefClick} creator=${creatorUid} ><a href="/buy/${docRefId}">Buy Ticket</a></button>
    </div>
</div>
`

export {detailsTemplate}