import {html, render} from '../node_modules/lit-html/lit-html.js'
import headerTemplate from './header.js'
import footerTemplate from './footer.js'
import homeTemplate from './home.js'
import registerTemplate from './register.js'
import loginTemplate from './login.js'
import aboutTemplate from './about.js'


const routers = {
    '/': homeTemplate(),
    'register': registerTemplate(),
    'login': loginTemplate(),
    'home': homeTemplate(),
    'about': aboutTemplate(),
}

const template = (bodyTemplate) => html `
    ${headerTemplate()}
    ${routers[bodyTemplate]}
    ${footerTemplate()}
`

const router = window.onpopstate = () => {
    const path = location.hash.split('/')[1]
    render(template(path), document.getElementById('main')) 
}

router()

export default router;