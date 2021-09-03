function attachEvents() {
    const html = {
        players: () => document.querySelector('#players'),
        name: document.querySelector('#addName'),
        hiddenButtons: [...document.querySelectorAll('#buttons button')],
        canvas : document.querySelector('canvas')
        
    }

    let money = 500
    const baseURl = 'https://appbase-621f2-default-rtdb.firebaseio.com/'
    async function loadPlayer() {
        try {
            const res = await fetch(baseURl + '.json')
            const data = await res.json()
            for (const key in data) {
                const { name, money, bullets } = data[key]
                let template = `<div base-key="${key}" class="player">       
                <p>Name:${name}</p>
                <p>Money:${money}</p>
                <p>Bullets:${bullets}</p>
                <button class="play">Play</button>
                <button class="delete">Delete</button>
            </div> `
            
                html.players().innerHTML += template
            }
        } catch (er) {
            console.log(er.error);
        }

    }
  loadPlayer()
    setTimeout(() => {
        [...document.querySelectorAll('button')].map(btn => btn.addEventListener('click', clickBtn))
    }, 1000);
  
    function clickBtn(e) {
        let currentKey = this.parentNode.getAttribute('base-key')

        if (this.textContent == 'Play') {
            html.canvas.style.display ='block'
            html.hiddenButtons.map(btn => btn.style.display = 'block')
            html.hiddenButtons.map(btn =>  btn.dataset['key'] = currentKey)
            
            const [name, money, bullets] = [...this.parentNode.children]
              .map(el => el.textContent.split(':')[1])

            loadCanvas({name ,money ,bullets})
        }

        if (this.textContent == 'Delete') {
            fetch(baseURl + currentKey + '.json', { method: 'DELETE' })
                .then(()=> window.location.reload())
                html.players()
        }

        if (this.textContent == 'Add Player') {
            fetch(baseURl + '.json', {
                method: 'POST',
                body : JSON.stringify({'name': html.name.value, 'money': 500, 'bullets' : 6})
            }).then(() => {
                html.name.value = ''
                window.location.reload()
                
            })
             

        }

        if (this.textContent == 'Save') {
            const key = this.getAttribute('data-key')
            TODO:
            fetch(baseURl + key + '.json')
            .then(res => res.json())
            .then(data => {
                const { name, money, bullets } = data
                 fetch(baseURl + key + '.json', {
                    method: 'PATCH',
                    body: JSON.stringify({name,  money , bullets})
                })
            })

           
        }

        if (this.textContent == 'Reload') {
            const key = this.getAttribute('data-key')
            money -= 60 
            
            fetch(baseURl + key + '.json', {
                method: 'PATCH',
                body: JSON.stringify({ money , bullets : 6})
            })
            
          
            fetch(baseURl + key + '.json')
                .then(res => res.json())
                .then(data => {
                    const { name, money, bullets } = data
                    loadCanvas({name ,money ,bullets})
                })
         
                clearInterval(canvas.intervalId)

        }
    }

}