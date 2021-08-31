function solve() {
    const info = document.getElementById('info')
    const btnDepart = document.getElementById('depart')
    const btnArrive = document.getElementById('arrive')
   
    let stopId = 'depot'
    let bussName;

    function bussMovie() {
        return fetch('https://appbase-621f2-default-rtdb.firebaseio.com/schedule.json')
            .then((response) => response.json())
            .then((data) => {
                bussName = data[stopId].name
                stopId = data[stopId].next
            })
        .catch((er) => {return 'Error'})
    }


    function arrive() {
        bussMovie()
        btnDepart.disabled = false
        btnArrive.disabled = true
        info.textContent = `Arriving at ${bussName}`

    }

    function depart() {
        bussMovie()
        btnDepart.disabled = true
        btnArrive.disabled = false
        info.textContent = `Next stop ${bussName || 'Depot'}`


    }


    return {
        depart,
        arrive
    }


}

let result = solve()