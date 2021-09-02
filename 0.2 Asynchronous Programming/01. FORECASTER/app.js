(function attachEvents() {
    const [input, btn] = document.querySelectorAll('input')
    const content = document.getElementById('forecast')
    const current = document.getElementById('current')
    const upcoming = document.getElementById('upcoming')
    const locationUrl = 'https://appbase-621f2-default-rtdb.firebaseio.com/'
    const signs = {
        'Sunny': '&#x2600;', // ☀
        'Partly sunny': '&#x26C5;', // ⛅
        'Overcast': '&#x2601;', // ☁
        'Rain': '&#x2614;', // ☂
        'Degrees': '&#176;', // °
    }

    btn.addEventListener('click', function (e) {
        current.innerHTML = ''
        upcoming.innerHTML = ''
        let location = fetch(locationUrl + 'location.json')
            .then((res) => res.json())

        let weather = fetch(locationUrl + 'weather.json')
            .then((res) => res.json())

        Promise.all([location, weather])
            .then(([locationData, weatherData]) => result(locationData, weatherData))
            .catch(er => console.log(er.error))

    })


    function result(locationData, weatherData) {
        Object.values(locationData).forEach(el => {
            const { code, name } = el
            if (name == input.value) {
                const [cond, height, low] = Object.values(weatherData[code][0])
                content.style.display = 'block'
                let currentDiv = document.createElement('div')
                currentDiv.className = 'forecasts'
                currentDiv.innerHTML = `<span class='condition-symbol'>${signs[cond]}</span>
                <span class='condition'>
                <span class='forecast-data'>${name}</span>
                <span class='forecast-data'>${low}&#176;/${height}&#176;</span>
                <span class='forecast-data'>${cond}</span>
                </span>
                `
                current.appendChild(currentDiv)

                for (let i = 0; i < Object.keys(weatherData[code]).length; i++) {

                    let [cond, height, low] = Object.values(weatherData[code][i])
                    let upcomingDiv = document.createElement('div')
                    let span = document.createElement('span')
                    upcomingDiv.className = 'forecasts-info'
                    upcomingDiv.innerHTML = `<span class='upcoming'>       
                    <span class='symbol'>${signs[cond]}</span>
                    <span class='forecast-data'>${low}&#176;/${height}&#176;</span>
                    <span class='forecast-data'>${cond}</span>
                    </span>
                    `

                    upcoming.appendChild(upcomingDiv)
                }

            }

        })
    }

})()


//valid data: "London", "New York" and "Barcelona".




