import { fb } from './sdk.js'
import { router } from '../app.js';
import { showMessage } from '../functions/showMessageInformation.js';



// Login user with (email and pass)
function loginUser(email, pass) {
  fb.auth().signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      // Signed in
      const { uid, email }  = userCredential.user
      console.log(`Success login!\nYou id: ${uid}\nYou email: ${email}`)
      showMessage('Success','green')
      localStorage.setItem('auth', JSON.stringify(userCredential)) //save user data 
       //redirect   
       history.pushState({},'','/')
       router('/home')
    })
    .catch((er) => {
      showMessage(er.message)

    })
}

export {loginUser}