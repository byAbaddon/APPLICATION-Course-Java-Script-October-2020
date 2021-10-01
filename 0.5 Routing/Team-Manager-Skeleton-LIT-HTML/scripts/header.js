import { html, render} from '../node_modules/lit-html/lit-html.js'

export default () => html `
  <div class="header">
${!localStorage.getItem('auth') ? html`
   <div>
     <p>You are currently not logged in.</p>
     <a href="#/login">Log in</a> / <a href="#/register">Register </a>
     <hr>
     <br> 
   </div>`
 : html `
    <div>
      <p>You are currently logged in.</p>
      <a @click =${logOut} style="color:red;
                text-decoration:none;
                border: 3px solid #0d6efd;
                padding: 5px"
         href="#/logout">Log out
         
        </a>
      <hr>
      <br>
    
    </div>
   `}
</div>
`