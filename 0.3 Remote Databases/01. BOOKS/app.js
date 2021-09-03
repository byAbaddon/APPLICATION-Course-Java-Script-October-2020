(function book() {
    document.querySelector('#loadBooks').onclick = getBooks
    document.querySelector('#submitBookBtn').onclick = postBook
    const editBnt = document.querySelector('#submitEditBookBtn')
    const url = 'https://appbase-621f2-default-rtdb.firebaseio.com/'

    async function getBooks() {
        if (document.querySelector('tbody').childElementCount < 2) {
            try {
                const response = await fetch(url + '.json')
                const data = await response.json()
                template(data)
            } catch (er) {
                console.log(er.error)
            }
        }
    }

    async function postBook(e) {
        e.preventDefault()
        try {
            const [title, author, isbn] = document.querySelectorAll('input')
            await fetch(url + '.json', {
                method: 'POST',
                body: JSON.stringify({
                    title: title.value,
                    author: author.value,
                    isbn: isbn.value
                })
            })
        } catch (er) {
            console.log(er.error, `\n POST Error`)
        }

        title.value = author.value = isbn.value = ''
        reloadBooks() 
           
    }


    async function editBook(bookName, id) {
        document.querySelector('h3').textContent = `EDIT BOOK - '${bookName}'`
        document.querySelector('#submitBookBtn').style.display = 'none'
        editBnt.style.display = 'block'
       try {
           const response = await fetch(url + id + '.json')
           const { title, author, isbn } = await response.json()

           document.querySelector('#title').value = title
           document.querySelector('#author').value = author
           document.querySelector('#isbn').value = isbn   
     } catch (err) {
         console.log(err.error)
       }
       
       editBnt.addEventListener('click', function (e) {
           setTimeout(() => {
            const [t, a, i] = document.querySelectorAll('input')               
            fetch(url + id + '.json', {   
                method: 'PATCH',
                body: JSON.stringify({
                     title: t.value,
                     author: a.value,
                     isbn: i.value
                 })
            })
                .catch((err) => {     
                console.log(err.error, `\n EDIT Error`)
            })
           
           })
         
       } , 500)

    }

  
    async function deleteBook(id) {
        try {
            await fetch(url + id + '.json', {
                method: 'DELETE'
            })
            reloadBooks() 
        } catch (er) {
            console.log(er.error, `\n DELETE Error`)
        }
    }


    document.addEventListener('click', function (e) {
        if (e.target.tagName == 'BUTTON') {
            try {
                if (e.target.textContent == 'Edit') {
                    const bookName = e.target.parentNode.parentNode.children[0].textContent
                    editBook(bookName, e.target.parentNode.parentNode.attributes[0].value)
                }

                if (e.target.textContent == 'Delete') {
                    deleteBook(e.target.parentNode.parentNode.attributes[0].value)
                }
                
            
            } catch (error) {
                alert('This Book is just Template !')                  
            }
        }
    })

   
    function template(data) {
        for (const key in data) {
            const { title, author, isbn} = data[key]

            document.querySelector('tbody').innerHTML +=
                `<tr 'base-id' = ${key}>
              <td>${title}</td>
              <td>${author}</td>
              <td>${isbn}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
               </td>
            </tr>
            `
        }
    }
    
    function reloadBooks() {
        document.querySelector('tbody').innerHTML = ''
        getBooks()  
    }

})()