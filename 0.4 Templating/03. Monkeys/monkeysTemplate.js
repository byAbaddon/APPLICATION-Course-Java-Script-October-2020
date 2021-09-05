import monkeyData from './monkeys.js'

const html = {
    section : () => document.querySelector('section'),
    monkeyTemplate :()=> document.getElementById('template-monkey').innerHTML,
    monkeyPartial : ()=> document.getElementById('partial-monkey').innerHTML,
}

Handlebars.registerPartial('monkeyPartial', html.monkeyPartial())
const template = Handlebars.compile(html.monkeyTemplate())
const htmlResult = template({ monkeyData })
html.section().innerHTML = htmlResult

Array.from(document.querySelectorAll('button')).forEach(btn =>
    btn.addEventListener('click', function (e) {
        const st = this.nextElementSibling
        st.style.display == 'none' ? st.style.display = 'block' : st.style.display ='none' 
    })
)


//---------------------------------(2)---------------------------

// import monkeys from './monkeys.js';

// window.addEventListener('load', async () => {
//     const mainEl = document.querySelector('section');
    
//     const mainString = await (await fetch('./main-template.hbs')).text()
//     const mainTemplate = Handlebars.compile(mainString);
//     Handlebars.registerPartial('monkey', await (await fetch('./monkey.hbs')).text());
    
//     const html = mainTemplate({ monkeys });
//     mainEl.innerHTML = html;
    
//     const monkeysEl = document.querySelector('.monkeys');
//     monkeysEl.addEventListener('click', toggleShowInfo);
    
//     function toggleShowInfo(e) {
//         if(e.target.tagName === 'BUTTON') {
//             const p = e.target.parentNode.querySelector('p');
//             p.removeAttribute('style');
//         }
//     }
// });