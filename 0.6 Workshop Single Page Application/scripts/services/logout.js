import { fb } from './sdk.js'
import { router } from '../app.js';
import { showMessage } from '../functions/showMessageInformation.js';


// //singOut
function logOut() {
  fb.auth().signOut()
    .then(data => {
      localStorage.removeItem('auth')
      console.log('logOut was success');
      showMessage('LogOut was success!', 'green')
       //redirect   
      router('/home')
  })
  .catch(er => console.log(er.error))
}


export {logOut}