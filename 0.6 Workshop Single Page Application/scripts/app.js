import { html, render } from '../node_modules/lit-html/lit-html.js'
import eventHrefClick, { docRefId } from '../scripts/functions/eventHrefClick.js'
import { userData } from './services/userData.js'
import { db } from './services/sdk.js'

import layout from './views/layout.js'
import pageNotFound from './views/page-not-found.js'
import home from './views/home.js'
import login from './views/login.js'
import { register } from './views/register.js'
import { logOut } from './services/logout.js'
import cinema from './views/cinema.js'
import { addMovie } from './views/add-movie.js'
import buy from './views/buy.js'
import { showDetails } from './views/show-details.js'

import { showMyMovies } from './views/my-movies-template.js'
import { deleteMovie } from './services/deleteMovie.js'
import { showEditMovie } from './views/edit-movie-template.js'


let currentId;


const routes = [
  {
    path: '/',
    template: home,
    context: {
     
    }
  },
  {
    path: '/home',
    template: home,
  },
  {
    path: '/register',
    template: register,
  },
  {
    path: '/login',
    template: login,
  },

  {
    path: '/logout',
    template: home,
  },
 {
    path: '/not-found',
    template: pageNotFound
  },
  {
    path: '/cinema',
    template: cinema,
  },
  {
    path: '/create',
    template: addMovie,
  },
  {
    path: '/buy',
    template: buy,
    context: {
      currentId
    }
  },
  {
    path: '/details',
    template: showDetails,
    context: {
      
    }
  },
  {
    path: '/my_movies',
    template: showMyMovies
  },

  {
    path: '/delete',
    template: deleteMovie
  },
  {
    path: '/edit',
    template: showEditMovie
  },

]


const router = (path) => {
  let [_, currentPath, currentPathId] = path.split('/')
  currentId = currentPathId

let route = routes.find(x => x.path == '/'+ currentPath) || routes.find(x => x.path == '/not-found') //TODO
    const props = { eventHrefClick, logOut, userData, currentId, docRefId, ...route.context }
    render(layout(route.template, props), document.getElementById('app'))
}


router(location.pathname)



export{router ,currentId}