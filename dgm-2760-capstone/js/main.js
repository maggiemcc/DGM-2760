// Display Company Name & Sloagen, Main H1
document.querySelector('#company').innerText = "Movie Reel";
document.querySelector('header > h2').innerText = "Choose Your Entertainment";

// MOVIE API
async function getMovieData() {
    try {
        const response = await fetch('movie.json')
        return await response.json()

    } catch (error) {
        console.error(error)
    }
}


let movieData = {}
getMovieData().then(data => (movieData = data))


document.querySelector('#thor').addEventListener('click', movieInfo)
document.querySelector('#venom').addEventListener('click', movieInfo)
document.querySelector('#grease').addEventListener('click', movieInfo)
document.querySelector('#cinderella').addEventListener('click', movieInfo)



function movieInfo(event) {
    let movieChoice = movieData.movies.find(movie => {
        return event.target.id === movie.name.toLowerCase()
    })

    console.log(movieChoice)

    document.querySelector("#movieName").textContent = `${movieChoice.name}`
    document.querySelector("#length").textContent = `${movieChoice.length}`
    document.querySelector("#rated").textContent = `${movieChoice.rated}`
    document.querySelector("#genre").textContent = `${movieChoice.genre}`
    document.querySelector("#picture").src = `${movieChoice.picture}`
}



// ADDING/REMOVING TICKETS ARRAY
const ticketsArray = ['adult ticket']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

const listTickets = () => {
    let ticketList = ''
    ticketsArray.forEach(ticket => {
        ticketList += `${ticket} <br>`
    })
    displayResults.innerHTML = `${ticketList} <span>${ticketsArray.length} tickets total</span>`
}

listTickets()

// Add a child, adult, or senior ticket
document.querySelector('#add_child').onclick = () => {
    ticketsArray.push('+ child ticket')
    listTickets()
}

document.querySelector('#add_adult').onclick = () => {
    ticketsArray.push('+ adult ticket')
    listTickets()
}

document.querySelector('#add_senior').onclick = () => {
    ticketsArray.push('+ senior ticket')
    listTickets()
}


// Remove last ticket
document.querySelector('#remove_ticketLast').onclick = () => {
    if (ticketsArray.length > 0) {
        ticketsArray.pop()
        listTickets()
    } else {
        errorElement.textContent = 'There are no tickets to remove from list.'
    }
}



// CHECKOUT
let checkoutResult = document.querySelector('#checkoutResults')

function tellCheckout() {
    // get names
    let customerName = document.querySelector('#name').value.toUpperCase()
    console.log(customerName)

    // get email
    var email = document.getElementById("myEmail").value;
    console.log(email)

    // get Credit Card Info
    var month = document.getElementById("month").value;
    console.log(month)
    var year = document.getElementById("year").value;
    console.log(year)


    let imagePath = 'images/ticket.png'
    const ticketImage = document.createElement('img')
    ticketImage.setAttribute('src', imagePath)
    const movieTicket = document.querySelector('#checkoutTicket')


    if (movieTicket.hasChildNodes(ticketImage)) {
        let pass = movieTicket.childNodes;

        for (let i = 0; i < pass.length && pass.length < 2; i++) {
            movieTicket.appendChild(ticketImage);
        }
    }

    let confirmation = Math.floor(Math.random() * 15000)


    // message containing first and last name, total tickets, and email.
    const myCheckout = `<span>${customerName}</span>,<br> Thank you for your purchase of <span>${ticketsArray.length}</span> movie ticket(s) for ${showTimes.time}. We hope you will enjoy the show. Your purchase was charged to your card with the expiration date of: <span>${month}/${year}</span>. An email confirmation has been sent to: <span>${email}</span>. Your confirmation number: <span>${confirmation}</span>`

    checkoutResult.innerHTML = myCheckout
    console.log(myCheckout)
}

// display checkout message once clicked
document.querySelector('#checkoutResults').onClick = tellCheckout


let message

// object literal
const showTimes = {
    time: '9:00 AM',

    // method
    timeOption: function () {
        console.log('timeOption method has been called')
        message = `You have chosen ${showTimes.time} for your movie.`
        document.querySelector('#timeFeedback').textContent = message
    }

}

// Time
document.querySelector('#morning').addEventListener('click', () => showTimes.time = '9:00 AM')
document.querySelector('#afternoon').addEventListener('click', () => showTimes.time = '1:30 PM')
document.querySelector('#evening').addEventListener('click', () => showTimes.time = '4:30 PM')
document.querySelector('#night').addEventListener('click', () => showTimes.time = '8:00 PM')


document.querySelector('#showTime').addEventListener('click', showTimes.timeOption)
