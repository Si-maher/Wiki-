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
   const url = `${originApi}/w/api.php?action=query&origin=*&format=json&list=search&srsearch=${searchValue}`
   fetch(url).then(function(data) {
       return data.json()
       
   }).then(displayData)
}

// Show / hide gif 

function showGif ( value) {
    if (value === 'show') {
        document.querySelector('.wait-icon').classList.add('show')
    } else if(value === 'hide') {
        document.querySelector('.wait-icon').classList.remove('show')
    }
}
function displayData (data) {
    showGif('hide')
    let result = data.query.search
    let outPut = ''
    result.forEach(function(item) {
        outPut += `
        <li class="search-item">
        <h2 class="search-item__title">${item.title}</h2>
        <p class="search-item__text">${item.snippet}</p>
        <a href="http://en.wikipedia.org/?curid=${item.pageid}" class="search-item__link" target="_blank">read more...</a>
    </li>  `
})
        
        
 document.querySelector('.results').innerHTML = outPut       


    
}