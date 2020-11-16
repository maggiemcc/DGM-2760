// Display Company Name & Sloagen, Main H1
document.querySelector('#company').innerText = "Hotel California";
document.querySelector('header > h2').innerText = "The perfect getaway";
document.querySelector('#pageName').innerText = "Hotel California"


async function getHotelData() {
    try {
        const response = await fetch('hotel.json')
        return await response.json() // will return JSON object

    } catch (error) {
        console.error(error)
    }
}


let hotelData = {}
getHotelData().then(data => (hotelData = data))


document.querySelector('#marriott').addEventListener('click', hotelInfo)
document.querySelector('#hilton').addEventListener('click', hotelInfo)
document.querySelector('#sheraton').addEventListener('click', hotelInfo)


function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })

    console.log(hotelChoice)
    
    document.querySelector("#hotelName").textContent = `The ${hotelChoice.name} Hotel`
    document.querySelector("#address").textContent = `${hotelChoice.address}`
    document.querySelector("#rooms").textContent = `${hotelChoice.rooms}`
    document.querySelector("#gym").textContent = `${hotelChoice.gym}`
    document.querySelector("#type").textContent = `${hotelChoice.roomTypes}`
    document.querySelector("#picture").src = `${hotelChoice.picture}`
}
