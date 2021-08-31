function getInfo() {
    const html = {
        input: document.getElementById('stopId'),
        stopName: document.getElementById('stopName'),
        busses: document.getElementById('buses')
    }

    fetch(`https://appbase-621f2-default-rtdb.firebaseio.com/.json`)
        .then((response) => response.json())
        .then((data) => {
            html.stopName.textContent = data.businfo[html.input.value].name

            for (const [bus, min] of Object.entries(data.businfo[html.input.value].buses)) {
                html.busses.innerHTML += `<li>Bus ${bus} arrives in ${min} minutes</li>`
            }

            html.input.value = ''
        })
        .catch((error) => {
            html.stopName.textContent = 'Error'
            html.busses.innerHTML = ''
        })

}



//The valid data to IDs 1287, 1308, 1327 and 2334.




//-------------------------------------------------(2)-----------------------------




// function getInfo() {
//     const baseURL = "https://judgetests.firebaseio.com/businfo/{stopId}.json";


//     const validIds = ['1287', '1308', '1327', '2334'];
//     const elements = {
//         stopId() { return document.getElementById('stopId') },
//         stopName() { return document.getElementById('stopName') },
//         buses() { return document.getElementById('buses') }
//     };

//     const stopId = elements.stopId().value;

//     if(!validIds.includes(stopId)) {
//         elements.stopName().textContent = 'ERROR';
//         return;
//     }

//     const url = baseURL.replace('{stopId}', stopId);

//     fetch(url)
//         .then((response) => response.json())
//         .then((result) => showInfo(result));

//     function showInfo(data) {
//         elements.buses().textContent = '';
//         elements.stopName().textContent = data.name;

//         Object.keys(data.buses).forEach((bus) => {
//             let li = document.createElement('li');
//             li.textContent = `Bus ${bus} arrives in ${data.buses[bus]}`;
//             elements.buses().appendChild(li);
//         });
//     }
// }