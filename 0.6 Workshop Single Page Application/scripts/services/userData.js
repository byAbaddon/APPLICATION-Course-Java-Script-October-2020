function userData() {
  const user = localStorage.getItem('auth')
  const isAuth = Boolean(user ? JSON.stringify(user) : null)
  const data = JSON.parse(user)
  const [uid, email] = [data.user.uid, data.user.email]
  // const allData = { isAuth, uid, email }
  // return allData
  return {isAuth, uid, email}

}
  

export {userData}