function register(e) {
  e.preventDefault()
  let form = new FormData(document.forms['register-form'])
  let username = form.get('username')
  let pass = form.get('password')
  let passRe = form.get('repeatPassword')
  if (username && pass == passRe) {
    // console.log(username, pass, passRe);
    sessionStorage.setItem('auth', [username, pass])
    fetch('./templates/login/loginForm.hbs')
      .then(res => res.text())
      .then(data => {
        const templateSection = Handlebars.compile(data)
        document.getElementById('main').innerHTML = templateSection()
      })
  }

}


