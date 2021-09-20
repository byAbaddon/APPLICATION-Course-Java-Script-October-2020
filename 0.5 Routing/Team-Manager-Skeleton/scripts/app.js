async function getCommon() {
  let header = fetch('./templates/common/header.hbs')
    .then(res => res.text())

  let section = fetch(rooting[state])
    .then(res => res.text())

  let footer = fetch('./templates/common/footer.hbs')
    .then(res => res.text())

  await Promise.all([header, section, footer])
    .then(([header, section, footer]) => {
      Handlebars.registerPartial('header', header)
      Handlebars.registerPartial('footer', footer)
      const templateSection = Handlebars.compile(section)
      html.main().innerHTML = templateSection()

    })
    .catch(er => console.log(er.error))
}


const html = {
  main: () => document.getElementById('main'),
}

let state = history.pushState('', '', "#/");
let username = ['Ivan']
let rooting = {
  'home': './templates/home/home.hbs',
  'about': './templates/about/about.hbs',
  'login': './templates/login/loginForm.hbs',
  'register': './templates/register/registerForm.hbs',
  'logout': './templates/common/headerAndFooter.hbs',
  'catalog' : './templates/catalog/teamMember.hbs'
}

  fetch('./templates/common/headerAndFooter.hbs')
  .then(res => res.text())
    .then(dataTemplate => {
     const template = Handlebars.compile(dataTemplate)
      html.main().innerHTML = template()
  })


window.onpopstate = function (e) {
  state = location.toString().split('/').slice(-1)[0]
  state == 'logout' ? sessionStorage.removeItem('auth') : null  // Remove saved data from sessionStorage
    // console.log(state);
  
  getCommon()
}



// let currentState = () => window.location.hash
// console.log(currentState());