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



// ADDING/REMOVING TICKETS
const tickets = ['adult ticket']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

const listTickets = () => {
    let ticketList = ''
    tickets.forEach(ticket => {
        ticketList += `${ticket} <br>`
    })
    displayResults.innerHTML = `${ticketList} <span>${tickets.length} tickets total</span>`
}

listTickets()

// Add a child, adult, or senior ticket
document.querySelector('#add_child').onclick = () => {
    tickets.push('child ticket')
    listTickets()
}

document.querySelector('#add_adult').onclick = () => {
    tickets.push('adult ticket')
    listTickets()
}

document.querySelector('#add_senior').onclick = () => {
    tickets.push('senior ticket')
    listTickets()
}


// Remove last ticket
document.querySelector('#remove_ticketLast').onclick = () => {
    if (tickets.length > 0) {
        tickets.pop()
        listTickets()
    } else {
        errorElement.textContent = 'There are no tickets to remove from list.'
    }
}



// CHECKOUT
let checkoutResult = document.querySelector('#checkoutResults')

function tellCheckout() {
    // get names
    let firstName = document.querySelector('#fname').value.toLowerCase().split(/\s*[,\n." "]+\s*/)
    console.log(firstName)
    let lastName = document.querySelector('#lname').value.toLowerCase().split(/\s*[,\n." "]+\s*/)
    console.log(lastName)

    // get email
    var email = document.getElementById("myEmail").value;
    console.log(email)

    // get Credit Card Info
    var month = document.getElementById("month").value;
    console.log(month)
    var year = document.getElementById("year").value;
    console.log(year)


    // message containing first and last name, total tickets, and email.
    const myCheckout = `<span>${firstName} ${lastName}</span>, thank you for your purchase of <span>${tickets.length}</span> movie ticket(s). We hope you will enjoy the show. Your purchase was charged to your card with an expiration date of: <span>${month}/${year}</span>. We have sent an email confirmation to: <span>${email}</span>.`

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
