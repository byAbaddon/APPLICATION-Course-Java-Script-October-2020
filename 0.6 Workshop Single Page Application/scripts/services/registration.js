import { fb } from '../services/sdk.js'
import { router } from '../app.js';
import { showMessage } from '../functions/showMessageInformation.js';


// Create new Sing  with (email and pass)  
function registrationNewUser(email, pass) {
  fb.auth().createUserWithEmailAndPassword(email, pass)
    .then(data => {
        //redirect   
      history.pushState({},'','/login')
      router('/login')

      console.log('Success registration');
      showMessage('Success registration', 'green')
    })
    .catch(er => {
      console.log('error => ', er.message)
      showMessage(er.message)    
    })

}

export {registrationNewUser}