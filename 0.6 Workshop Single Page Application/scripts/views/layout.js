import {html} from '../../node_modules/lit-html/lit-html.js'
import headerNavBar from '../views/header-nav-bar.js'



export default (bodyContent, props) => html`
    ${headerNavBar(props)}
    
    ${bodyContent(props)}
    
    <footer>@Movies</footer>`
