import firebase  from './auth.js'

const [email, password , submitBtn] = document.querySelectorAll('#sing-form input')
const errorMessage = document.querySelector('.error')


submitBtn.addEventListener('click', singNewUser)

function singNewUser(e) {
  e.preventDefault()    
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(result => {
      console.log(result)
      document.location.href = '/0.3 Remote Databases/00. Bonus - Authenticate/home.html'
    })
    .catch(er => {
      errorMessage.textContent = er
      errorMessage.style.display = 'inline-block'
      setTimeout(() => {
        email.value = password.value = ''
       
        window.location.reload()
      }, 2500);
      
      })
  }

  

const [emailLog, passwordLog , loginBtn] = document.querySelectorAll('#login-form input')
loginBtn.addEventListener('click', loginUser)


function loginUser(e) {
  e.preventDefault()   
  firebase.auth().signInWithEmailAndPassword(emailLog.value, passwordLog.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}

document.querySelector('#logout').addEventListener('click', logout)
function logout() {
  firebase.auth().signOut()
    .then(data => console.log(data))
    .catch(er => console.log(er.error))
  
}

