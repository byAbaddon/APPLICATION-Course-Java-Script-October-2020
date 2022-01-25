import { html } from '../../node_modules/lit-html/lit-html.js'
import { showMessage } from '../functions/showMessageInformation.js'
import { registrationNewUser } from '../services/registration.js'



const register = () => html `
  <div id="registerForm">
    <h1>Register</h1>
    <form action="#/register" method="POST" @submit=${registrationSubmit}>
        <label>Email</label>
        <input type="email" name="email" id="registerEmail">
        <label>Password</label>
        <input type="password" name="password" id="registerPassword">
        <label>Repeat Password</label>
        <input type="password" name="repeatPassword" id="registerRepeatPassword">
        <input type="submit" value="Register">
    </form>
</div>
`

function registrationSubmit(e) {
  e.preventDefault()
  const formData = new FormData(e.target)
  const email = formData.get('email')
  const pass = formData.get('password')
  const rePass = formData.get('repeatPassword')

  if (pass != rePass) {
    console.log('error')
    showMessage('Password not equal')

  } else {
    // Create new Registration with (email and pass)
    registrationNewUser(email, pass)
  }
}



export {register,}