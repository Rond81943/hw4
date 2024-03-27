let slider = document.querySelector('#slider');
let btnL = document.querySelector('#left');
let btnR = document.querySelector('#right');
let txt = ['text1', 'текст2', 'ТЕКСТ3'];
let i = 0;

btnL.addEventListener('click', (e) => {
    e.preventDefault()
    if (i == 0) {
        i = txt.length;
    }
    i--;
    slider.textContent = txt[i];
})

btnR.addEventListener('click', (e) => {
    e.preventDefault()
    if (i == txt.length - 1) {
        i = -1;
    }
    i++;
    slider.textContent = txt[i];
})