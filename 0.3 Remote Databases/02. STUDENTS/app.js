fetch('https://appbase-621f2-default-rtdb.firebaseio.com/.json')
  .then(req => req.json())
  .then(data => {
    Object.entries(data).sort((a, b) => a[1].id - b[1].id)
      .forEach(row => {
        const { id, firstName, lastName, facultyNumber, grade } = Object.values(row)[1]   
        const template = `<tr>
                          <td>${id}</td>
                          <td>${firstName}</td>
                          <td>${lastName}</td>
                          <td>${facultyNumber}</td>
                          <td>${grade}</td>
                        </tr>`
      
      document.querySelector('tbody').innerHTML += template    
    })
  })
   

 




