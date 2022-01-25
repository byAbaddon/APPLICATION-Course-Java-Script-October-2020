import { html } from '../../node_modules/lit-html/lit-html.js'
import { logOut } from '../services/logout.js'

export default ({eventHrefClick, userData}) => html`<nav @click=${eventHrefClick}>
      <ul>
        ${!localStorage.getItem('auth')
            ? html`
            <li><a href="/home">Home</a></li>
            <li class="right"><a href="/register">Register</a></li>
            <li class="right"><a href="/login">Login</a></li>
            `
            : html`
                 <li><a href="/cinema">Cinema</a></li>
                  <li><a href="/create">Add Movie</a></li>
                  <li><a href="/my_movies">My Movies</a></li>
                  <li class="right"><a href="/logout" @click=${logOut}>Logout</a> </li>
                  <li class="right">Welcome, ${userData().email}!></li>
              `}
      </ul>
</nav>`
