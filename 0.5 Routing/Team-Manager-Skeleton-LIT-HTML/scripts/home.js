import { html, render} from '../node_modules/lit-html/lit-html.js'


export default () => html`<div class="container">
    <div>
        <h1>Home Page</h1>
            <h5 style="color:green">Welcome to Home Page.</h5>     
    </div>
    <a href="#/about">Goto about page</a>
   
</div>`