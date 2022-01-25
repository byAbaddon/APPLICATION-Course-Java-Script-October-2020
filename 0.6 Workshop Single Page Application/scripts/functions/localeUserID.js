const currentUserId = () => {
  const data = JSON.parse(localStorage.getItem('auth'))
  const localeUserId = data.user.uid
  
  return localeUserId
}

export{ currentUserId }