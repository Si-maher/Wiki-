// Variables 

const input = document.querySelector('.main-search')
const searchBtn = document.querySelector('.main-btn')

// Events 

searchBtn.addEventListener('click', searchWiki)

// Functions 

function searchWiki(event) {
    event.preventDefault()
    showGif()
    let searchValue = input.value

   const originApi = 'https://en.wikipedia.org'
   const url = `${originApi}/w/api.php?action=query&origin=*&format=json&list=search&search=${searchValue}`
   fetch(url).then(function(data) {
       console.log(data);
       
   })
}

// Show / hide gif 

function showGif ( value) {
    if (value === 'show') {
        document.querySelector('.wait-icon').classList.add('show')
    } else if(value === 'hide') {
        document.querySelector('.wait-icon').classList.remove('show')
    }
}