import { router } from "../app.js";

const redirectPath = function (pathToRedirect, waitTime=200) {
  setTimeout(() => {
    history.pushState('', {}, pathToRedirect)
    router(pathToRedirect)
  }, waitTime);

}


export {redirectPath}