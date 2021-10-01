const firebaseConfig = {
  apiKey: 'AIzaSyDLLNHDIyaMulTpssOUevsxrXGxCGtSWOU',
  databaseURL: 'https://routingbase-21148-default-rtdb.europe-west1.firebasedatabase.app/'
}



// Create new Sing  with (email and pass)  
function registrationNewUser(email, pass) {
  firebase.initializeApp(firebaseConfig)
  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(data => {
      console.log('Success registration');
    })
    .catch(er => {
      console.log('error => ', er.message)
      document.getElementById('errorMessage').innerHTML = `${er.message}<br>Page be reload!`
    })

}

// Login user with it (email and pass)
function logNewUser(email, pass) {
  firebase.initializeApp(firebaseConfig)
  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user
      console.log('success');
      localStorage.setItem('auth', JSON.stringify(userCredential)) //log only
    })
    .catch((er) => {
      document.getElementById('errorLogMessage').innerHTML = `${er.message}<br>Page be reload!`

    })

}


// //singOut
function logOut() {
  console.log('logOut was success');
  localStorage.clear()
  history.pushState({}, '', '#/') //change path
  window.location.reload()  

// firebase.initializeApp(firebaseConfig)
// firebase.auth().signOut()
//     .then(data => console.log(data))
//     .catch(er => console.log(er.error))

}
