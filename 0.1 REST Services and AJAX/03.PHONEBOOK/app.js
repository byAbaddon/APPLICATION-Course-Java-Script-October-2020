(function attachEvents() {
    const btnLoad = document.getElementById('btnLoad')
    const btnCreate = document.getElementById('btnCreate')
    const [personField, phoneFiled] = document.querySelectorAll('input')
    let ul = document.getElementById('phonebook')
    const baseUrl = 'https://appbase-621f2-default-rtdb.firebaseio.com/phonebook.json'


    btnLoad.addEventListener('click', function (e) {
        ul.innerHTML = ''
        fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => {
                for (const key in data) {
                    const { person, phone } = data[key]

                    let li = document.createElement('li')
                    li.textContent = `${person}: ${phone}`

                    let button = document.createElement('button')
                    button.textContent = 'Delete'
                    let delUrl = `https://appbase-621f2-default-rtdb.firebaseio.com/phonebook/${key}.json`
                    button.addEventListener('click', function () {
                        fetch(delUrl, { method: 'DELETE' })
                    })

                    li.appendChild(button)
                    document.querySelector('ul').appendChild(li)
                }
            })
            .catch((error) => console.log(error.error))

    })

    btnCreate.addEventListener('click', function (e) {
        input = {
            person: personField.value,
            phone: phoneFiled.value
        }
        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(input)
        }).catch((error) => console.log(error.error))
        
        personField.value = phoneFiled.value = ''
    })


}())