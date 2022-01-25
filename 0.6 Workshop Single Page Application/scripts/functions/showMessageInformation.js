const showMessage = (message, color = 'red') => {
  document.querySelector('#messageBox').textContent = message
  document.getElementById('messageBox').style = `display:block ; background: ${color}`
  setTimeout(() => {
    document.getElementById('messageBox').style = "display:none"
  }, 2000)
}


export {showMessage}