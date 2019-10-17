// Variables 

const input = document.querySelector('.main-search')
const searchBtn = document.querySelector('.main-btn')

// Events 

searchBtn.addEventListener('click', searchWiki)

// Functions 

function searchWiki(event) {
    event.preventDefault()
    showGif()
}

// Show / hide gif 

function showGif ( value) {
    if (value === 'show') {
        document.querySelector('.wait-icon').classList.add('show')
    } else if(value === 'hide') {
        document.querySelector('.wait-icon').classList.remove('show')
    }
}