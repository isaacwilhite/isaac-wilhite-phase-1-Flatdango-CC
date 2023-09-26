//! Global Vars
const URL = 'http://localhost:3000/films'
const movieTitle = document.querySelector('#title')
const movieRuntime = document.querySelector('#runtime')
const remainingTickets = document.querySelector('#ticket-num')
const movieShowtime = document.querySelector('#showtime')
const movieDesc = document.querySelector('#film-info')
const moviePoster = document.querySelector('#poster')
const movieUl = document.querySelector('#films')
const buyTicketButton = document.querySelector('#buy-ticket')
const currentMovie = document.querySelector('.card')


//! Helper Functions
const fetchData = () => {
    fetch(URL)
    .then(response => response.json())
    .then(movieArray => {
        movieArray.forEach(movieObj => appendNav(movieObj))
        displayInfo(movieArray[0])
    })
}

const displayInfo = (movieObj) => {
    moviePoster.src = movieObj.poster
    moviePoster.alt = movieObj.title
    movieTitle.textContent = movieObj.title
    movieRuntime.textContent = `${movieObj.runtime} minutes`
    movieDesc.textContent = movieObj.description
    movieShowtime.textContent = movieObj.showtime
    remainingTickets.textContent = movieObj.capacity - movieObj['tickets_sold']
    currentMovie.id = movieObj.id
}

const appendNav = (movieObj) => {
    const movieLi = document.createElement('li')
    movieLi.classList = 'film item'
    movieLi.id = movieObj.id
    movieLi.textContent = movieObj.title
    movieLi.addEventListener('click', () => displayInfo(movieObj))
    movieUl.append(movieLi)
}

const buyTicket = () => {
    if(remainingTickets.textContent > 0) {
        remainingTickets.textContent -= 1
    }
    else {
        buyTicketButton.textContent = "Sold Out"
        alert('Tickets sold out!')
        
    }
}


//! Execute Code
fetchData()
buyTicketButton.addEventListener('click', buyTicket)





// //! Global Vars
// const URL = 'http://localhost:3000/films'
// const movieTitle = document.querySelector('#title')
// const movieRuntime = document.querySelector('#runtime')
// const remainingTickets = document.querySelector('#ticket-num')
// const movieShowtime = document.querySelector('#showtime')
// const movieDesc = document.querySelector('#film-info')
// const moviePoster = document.querySelector('#poster')
// const movieUl = document.querySelector('#films')
// const buyTicketButton = document.querySelector('#buy-ticket')



// //! Helper Functions
// const fetchData = () => {
//     fetch(URL)
//     .then(response => response.json())
//     .then(movieArray => {
//         movieArray.forEach(movieObj => appendNav(movieObj))
//         displayInfo(movieArray[0])
//     })
// }

// const displayInfo = (movieObj) => {
//     moviePoster.src = movieObj.poster
//     moviePoster.alt = movieObj.title
//     movieTitle.textContent = movieObj.title
//     movieRuntime.textContent = `${movieObj.runtime} minutes`
//     movieDesc.textContent = movieObj.description
//     movieShowtime.textContent = movieObj.showtime
//     remainingTickets.textContent = movieObj.capacity - movieObj['tickets_sold']
// }

// const appendNav = (movieObj) => {
//     const movieLi = document.createElement('li')
//     movieLi.class = 'film item'
//     movieLi.textContent = movieObj.title
//     movieLi.addEventListener('click', () => displayInfo(movieObj))
//     movieUl.append(movieLi)
// }

// const buyTicket = () => {
//     if(remainingTickets.textContent > 0) {
//         remainingTickets.textContent -= 1
//     }
//     else {
//         alert('Tickets sold out!')
//     }
// }


// //! Execute Code
// fetchData()
// buyTicketButton.addEventListener('click', buyTicket)