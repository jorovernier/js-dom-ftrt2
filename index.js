console.log('hello world')

let count = 0

let minusBtn = document.querySelector('#minus')
let resetBtn = document.querySelector('#reset')
let plusBtn = document.querySelector('#plus')
let counter = document.querySelector('#counter')
let input = document.getElementById('counter-input')

function increase(){
    count += 1
    counter.innerText = count
}

function decrease(){
    count -= 1
    counter.innerText = count
}

function reset(){
    count = 0
    counter.innerHTML = `<mark>${count}</mark>`
}

function inputHandler(event){
    count = +event.target.value
    counter.innerText = count
    input.value = ''
}

minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)
plusBtn.addEventListener('click', increase)
input.addEventListener('change', inputHandler)

// ----------------------------------------------------

let themeBtns = document.querySelectorAll('header button')
let allButtons = document.querySelectorAll('button')

function selectTheme(theme){
    document.querySelector('body').className = theme
    document.querySelector('main').className = theme
    allButtons.forEach(button => button.className = theme)
}

for(let i = 0; i < themeBtns.length; i++){
    themeBtns[i].addEventListener('click', (event) => {
        selectTheme(event.target.innerText.toLowerCase())
    })
}