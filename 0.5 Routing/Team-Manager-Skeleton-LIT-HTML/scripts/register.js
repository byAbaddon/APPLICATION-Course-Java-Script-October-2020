import { html, render } from '../node_modules/lit-html/lit-html.js'
import router from './app.js'


export default () => html `<form id='reg-form' >
    <div class="form-group">
        <label for="email">Email:</label>
        <input class="form-control" type="email"  id="email" name="email" placeholder="Enter your email"/>
    </div>
    <div class="form-group">
        <label for="password">Password:</label>
        <input class="form-control" type="password" id="password" name="password" placeholder="Minlength 8 chars" />
    </div>
    <div class="form-group">
        <label for="repeatPassword">Repeat Password:</label>
        <input class="form-control" type="password" id="repeatPassword" name="repeatPassword"/>
    </div>
    <input class="btn btn-default" type="submit" value="Register"  @click =${getRegData}  />
</form>
<br>
<h2 id="errorMessage" style="color:red"></h2>
`


function getRegData(e) {
    e.preventDefault()
    let data = new FormData(document.getElementById('reg-form'))
    let email = data.get('email')
    let pass = data.get('password')
    let rePass = data.get('repeatPassword')
    
    if (email && pass != '' && pass.length > 5 && pass == rePass) {
        // console.log(email, pass, rePass)
        registrationNewUser(email, pass)

        setTimeout(() => {
            if (!document.getElementById('errorMessage').textContent) {
                history.pushState({}, '', '#/login') //change path
                router() //refresh path
                window.location.reload()   
            } else {
                window.location.reload()   
            }
        }, 1500)
        
}
    
}