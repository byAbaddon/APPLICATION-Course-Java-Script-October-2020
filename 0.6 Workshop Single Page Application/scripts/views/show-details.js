import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { until } from '../../node_modules/lit-html/directives/until.js';

import { loadDetails } from '../services/loadDetails.js';



const showDetails = ({currentId}) => 
  html`${until(loadDetails(currentId),
    html`<h1>Loading...</h1>`
  )}`




export { showDetails } 

