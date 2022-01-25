import { router } from "../app.js"
import { getAllMoviesFromBase } from "../services/getAllMoviesFromBase.js"

let docRefId, creatorId, thisMovieData, allMovieData = ''
export default async function eventHrefClick(e) {
  if (e?.target.tagName == 'A') {   
    e.preventDefault()
 
    docRefId =  this.parentNode.attributes['docrefid']?.textContent
    creatorId = await this.attributes[0]?.textContent
    allMovieData = await this.parentNode
    thisMovieData = Object.values(allMovieData['children'])
    // getAllMoviesFromBase()

  history.pushState({}, '', e.target.pathname)
    router(e.target.pathname)
  
  }
}

export {docRefId, creatorId, thisMovieData, allMovieData}