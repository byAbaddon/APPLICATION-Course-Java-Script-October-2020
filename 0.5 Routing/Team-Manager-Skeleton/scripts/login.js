   var wrongLogin = true

function log(e) {
    e.preventDefault()
    let form = new FormData(document.forms['login-form'])
    let username = form.get('username')
    let pass = form.get('password')
    try {
      const [name, password] = sessionStorage.getItem('auth').split(',')
      if (username == name && pass == password) {
        fetch('./templates/common/header.hbs')
          .then(res => res.text())
          .then(data => {
            let loggedIn = true
            const templateSection = Handlebars.compile(data)
            document.getElementById('main').innerHTML = templateSection({ loggedIn, username })
          })
   
      }
    } catch { 
      console.log('No registered user or wrong password!');
      document.getElementById('main').innerHTML += 'No registered user or wrong password!' + '<br>'
      // setInterval(() => {
      //   location.reload()
      // }, 1000);
    }

  }
