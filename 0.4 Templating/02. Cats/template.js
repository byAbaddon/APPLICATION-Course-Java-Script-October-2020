const allCats =  () => document.querySelector('#allCats > ul')
const catsTemplate = document.querySelector('#cat-template').innerHTML  // template
const catsPartial = document.querySelector('#cat-partial').innerHTML    // partial

 Handlebars.registerPartial('catPartial', catsPartial)
 const template = Handlebars.compile(catsTemplate)
 const htmlResult = template({cats})
   allCats().innerHTML = htmlResult

 
window.addEventListener('click', function (e) {
    if(e.target.tagName == 'BUTTON') {
           const divToToggle = e.target.parentNode.querySelector('.status') 
           if(divToToggle.style.display == 'none') {
               divToToggle.removeAttribute('style')
           } else {
               divToToggle.style.display = 'none'
           }
       }

}) 


//----------------------------------------------(2)-----------------------------


// const allCats =  () => document.querySelector('#allCats > ul')

// Promise.all([
//         getTemplate('./cats-template.hbs'),
//         getTemplate('./cat-partial.hbs')
//     ])
//     .then(([tempScr, partSrc]) => {
//         Handlebars.registerPartial('catPartial', partSrc)
//         const template = Handlebars.compile(tempScr)
//         const htmlResult = template({cats})
//         allCats().innerHTML = htmlResult

//     })



// function getTemplate(file) {
//     return fetch(file).then(res => res.text())
// }



//     window.addEventListener('click', function (e) {
//          if(e.target.tagName == 'BUTTON') {
//                 const divToToggle = e.target.parentNode.querySelector('.status') 
//                 if(divToToggle.style.display == 'none') {
//                     divToToggle.removeAttribute('style')
//                 } else {
//                     divToToggle.style.display = 'none'
//                 }
//             }
    
//  }) 
