import { html } from '../../node_modules/lit-html/lit-html.js'
import { loginUser } from '../services/loginUser.js'


export default () => html `
<div id="loginForm">
    <h1>Login</h1>
    <form action="" method=""  @submit=${loginSubmit}>
        <label>Email</label>
        <input type="email" name="email" id="loginUsername">
        <label>Password</label>
        <input type="password" name="password" id="loginPassword">
        <input type="submit" value="Login">
    </form>
</div>
`

function loginSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email')
    const pass = formData.get('password')
    // Login user with (email and pass)
    loginUser(email, pass)

}


export {loginSubmit}