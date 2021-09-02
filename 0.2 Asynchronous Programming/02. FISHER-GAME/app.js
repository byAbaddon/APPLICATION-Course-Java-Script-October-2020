(function attachEvents() {
    const baseUrl = ' https://fisher-game.firebaseio.com/'

    document.querySelectorAll('aside button').forEach(el =>
        el.addEventListener('click', function (e) {
            if (this.textContent == 'Load') {
                fetch(baseUrl + 'catches.json')
                    .then(res => res.json())
                    .then((data) => {
                        Object.keys(data).forEach(key => {
                            let panel = document.querySelector('.catch')
                            let clone = panel.cloneNode(true)
                            clone.setAttribute('data-id', key)
                            clone.onclick = operation
                            clone.querySelectorAll('input').forEach(el => 
                                data[key][el.className] ? el.value = data[key][el.className] : null
                            )

                            document.querySelector('#catches').appendChild(clone)
                        })
                    })
            }

            if (this.textContent == 'Add') {
                const [angler, weight, species, location, bait, captureTime] = document.querySelectorAll('#addForm input')
                
                fetch(baseUrl + 'catches.json', {
                    method: 'POST',
                    body: JSON.stringify({
                        angler: angler.value, weight: weight.value, species: species.value,
                        location: location.value, bait: bait.value, captureTime: captureTime.value
                    })
                  
                }).catch(er => console.log(er.error))
                success() 
            }
        })
    )
    
    function operation(e) {
       const id = this.getAttribute('data-id')
        if (e.target.className == 'delete') {
            fetch(baseUrl + `catches/${id}.json`, { method: 'DELETE' })
            .catch(er => console.log(er.error))
            success() 
        }

        if (e.target.className == 'update') {
            const [angler, weight, species, location, bait, captureTime] = this.querySelectorAll('input')
            fetch(baseUrl + `catches/${id}.json`, {
                method: 'PUT',
                body: JSON.stringify({
                    angler: angler.value, weight: weight.value, species: species.value,
                    location: location.value, bait: bait.value, captureTime: captureTime.value
                })
            }).catch(er => console.log(er.error))
            success() 
        }
    }

   function success() {
        alert(`Operation was success!\nPush LOAD button to reload...`)
        setTimeout(() =>  window.location.reload(), 500)
      }
})()