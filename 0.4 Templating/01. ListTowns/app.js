let input = document.querySelector('#towns').value.split(', ')
let templateHtml = document.querySelector('#towns-template').innerHTML     //get template from index.html

document.querySelector('#btnLoadTowns').addEventListener('click', function () {
    const template = Handlebars.compile(templateHtml)
    const htmlResult = template({towns: input})
    root.innerHTML = htmlResult
        
})


//-----------------------------------------------------(2)-----------------------------------

// let towns = document.querySelector('#towns').value.split(', ')

// document.querySelector('#btnLoadTowns').addEventListener('click', function () {
//     fetch('./html-template.hbs')
//         .then(res => res.text())
//         .then(temSource => {
//             const template = Handlebars.compile(temSource)
//             const htmlResult = template({towns})
//             root.innerHTML = htmlResult
//         })
// })


//------------------------------------------------------(3)---------------------------------- without Handlebars


// document.querySelector('#btnLoadTowns').addEventListener('click', function load() {
//     root.children[0].innerHTML = document.querySelector('#towns').value.split(', ').map(x => `<li>${x}</li>` ).join(' ')

// })







