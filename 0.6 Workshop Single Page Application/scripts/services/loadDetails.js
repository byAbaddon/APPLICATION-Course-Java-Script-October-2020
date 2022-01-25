import { html } from '../../node_modules/lit-html/lit-html.js'
import { detailsTemplate } from '../views/detailsTemplate.js'
import { db } from './sdk.js'




async function loadDetails(docId) {
  let promise = await  db.collection('movies').doc(docId).get()
      .then(res => res.data())
        .catch(er => console.log("Error getting documents: ", er.error))
    
    const { title, imageUrl, description, genres, tickets, creatorUid } = promise     
    return detailsTemplate(title, imageUrl, description, genres, tickets, creatorUid, docId )
}




export { loadDetails }



