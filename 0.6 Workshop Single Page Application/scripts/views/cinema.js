import { html } from '../../node_modules/lit-html/lit-html.js'
import { until } from '../../node_modules/lit-html/directives/until.js';
import { router } from '../app.js'
import { loadMovieFromBase } from '../services/loadMoviesFromBase.js'
import { getAllMoviesFromBase } from '../services/getAllMoviesFromBase.js';
import { redirectPath } from '../functions/redirectPath.js';


export default () => html`
<div id="cinema" >
    <h1>All Movies</h1>
    <form action="/cinema" method=""  @submit=${search}>
        <label>Search genre:</label>
        <input type="text" name="search" >
        <input type="submit" value="Search">
    </form>
    <div class="movies">
      ${ until(loadMovieFromBase(), html`<h1 style="margin:auto ; color:black">Loading...</h1>`) }
    
    </div>
</div>`


loadMovieFromBase()

function search(e) {
    e.preventDefault()
    Array.from(document.querySelectorAll('.movies div')).forEach(el =>  el.remove())
    const searchGenres = e.target.querySelector('input').value.toLowerCase()

     loadMovieFromBase(searchGenres)
        // .then(a => console.log(a))
   
   
    
}


