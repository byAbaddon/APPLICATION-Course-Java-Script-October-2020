import { html, render} from '../node_modules/lit-html/lit-html.js'
import router from './app.js'


export default () => html `<form  id='login-form'>
    <div class="form-group">
        <label for="email">Email:</label>
        <input class="form-control" type="email"  id="email" name="email" placeholder="Enter your email"/>
    </div>
    <div class="form-group">
        <label for="password">Password:</label>
        <input class="form-control" type="password" id="password" name="password" placeholder="Minlength six chars"/>
    </div>
    <input class="btn btn-default" type="submit" value="Login" @click =${getLoginData}/>
</form>
<h2 id="errorLogMessage" style="color:red"></h2>
`


function getLoginData(e) {
    e.preventDefault()
    let data = new FormData(document.getElementById('login-form'))
    let email = data.get('email')
    let pass = data.get('password')

    if (email && pass.length > 5) {
        logNewUser(email, pass)

        setTimeout(() => {
            if (localStorage.getItem('auth')) {
                history.pushState({}, '', '#/home') //change path
                router() //refresh path
            } else {
                window.location.reload()  
                // document.getElementById('login-form').reset()
            }
        }, 2000)
        
}
    
}