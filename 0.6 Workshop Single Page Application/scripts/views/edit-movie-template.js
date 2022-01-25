import { html } from '../../node_modules/lit-html/lit-html.js'
import { until } from '../../node_modules/lit-html/directives/until.js';
import { loadEditMovie } from '../services/loadEditMovie.js';
import { currentId } from '../app.js';
import { editMove } from '../services/updateEditMovie.js';



const showEditMovie = () => html`
${until( loadEditMovie(currentId), editMovieTemplate())}
`


const editMovieTemplate = (title, imageUrl, description, genres, tickets, creatorUid ) => html`
    <div id="editMovie" creator="${creatorUid}" >
    <h1>Edit movie</h1>
    <form action="" method="" @submit=${eventEditMovie} >
        
        <label>Title</label>
        <input type="text" name="title" value="${title}" id="editTitle">
        <label>Image Url</label>
        <input type="text" name="imageUrl" id="editImage"
            value="${imageUrl}">
        <label>Description</label>
        <textarea type="text" id="editDescription"
            name="description">${description}</textarea>
        <label>Genres</label>
        <input type="text" name="genres" value="${genres}" id="editGenres">
        <label>Available Tickets</label>
        <input type="number" name="tickets" value="${tickets}" id="editTickets">
        <input type="submit" value="Edit">
    </form>
    </div> `



 function eventEditMovie(e) {
  e.preventDefault()

  const form = new FormData(e.target)
  const title =  form.get('title')
  const imageUrl =  form.get('imageUrl')
  const description =  form.get('description')
  const genres =  form.get('genres')
  const tickets = Number(form.get('tickets'))
  const creatorUid = currentId
  const movie = { title, imageUrl, description, genres, tickets, creatorUid } 
  editMove(movie, currentId)
    
}






export{showEditMovie, editMovieTemplate}