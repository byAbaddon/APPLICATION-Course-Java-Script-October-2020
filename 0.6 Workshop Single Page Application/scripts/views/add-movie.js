import { html } from '../../node_modules/lit-html/lit-html.js'
import { addMovieToDataBase } from '../services/addCreateMovie.js'
import { userData } from '../services/userData.js'



const addMovie = () => html `
<div id="addMovie">
    <h1>Create movie</h1>
    <form action="#/create" method="POST" @submit=${eventCreateMovieSubmit}>
        <label>Title</label>
        <input type="text" name="title" id="createTitle" minlength="6">
        <label>Image Url</label>
        <input type="text" name="imageUrl" id="createImage">
        <label>Description</label>
        <textarea type="text" name="description" id="createDescription"  minlength="10"></textarea>
        <label>Genres</label>
        <input type="text" name="genres" id="createGenres">
        <label>Available Tickets</label>
        <input type="number" name="tickets" id="createTickets">
        <input type="submit" value="Create">
    </form>
</div>`


function eventCreateMovieSubmit(e) {
  e.preventDefault()
  const form = new FormData(e.target)
  const title =  form.get('title')
  const imageUrl =  form.get('imageUrl')
  const description =  form.get('description')
  const genres =  form.get('genres')
  const tickets = Number(form.get('tickets'))
  const creatorUid = userData().uid
  const movie = {title, imageUrl, description, genres, tickets, creatorUid}
  // add movie to base
  addMovieToDataBase(movie)
  // return {title, imageUrl, description, genres, tickets, creatorUid}

}


export {addMovie}
