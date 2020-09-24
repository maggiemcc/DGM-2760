// Display Company Name & Sloagen, Main H1
document.querySelector('#company').innerText = "Fortune Teller";
document.querySelector('header > h2').innerText = "Switch Statements";
document.querySelector('#pageName').innerText = "Fortune Teller"

function getMonthName(month) {
    let name
        switch (month) {
            case 1:
                name = "January"
                break;
            case 2:
                name = "February"
                break;                
            case 3:
                name = "March"
                break;  
            case 4:
                name = "April"
                break;
            case 5:
                name = "May"
                break;                
            case 6:
                name = "June"
                break;
            case 7:
                name = "July"
                break;   
            case 8:
                name = "August"
                break; 
            case 9:
                name = "September"
                break;
            case 10:
                name = "October"
                break;
            case 11:
                name = "November"
                break; 
            case 12:
                name = "December"
                break;           
            default:
                name = "Not a month"
                break;
        }
        return name
}

function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = 'conquer all obstacles that come your way.'
            break;
        case 2:
            message = 'win millions of dollars from a long lost uncle in Nigeria.'
            break;
        case 3:
            message = 'make a fortune with your friend.'
            break;
        case 4:
            message = 'soon recieve a suprise from someone close to you.'
            break;
        case 5:
            message = 'travel far and wide, both for pleasure and business.'
            break;
        default:
            message = 'Some sort of error has occured.'
            break;
    }
    return message
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) +min;
}

let month = (getRandomIntInclusive(1, 12))
const monthName = getMonthName(month)
console.log(monthName)


let fate = getRandomIntInclusive(1, 5)
const fortune = getFortune(fate)
console.log(fortune)


let day = getRandomIntInclusive(1, 30)
console.log(day)

// display results in fortune section.
const fortuneRevealed = `On ${monthName} ${day}, you will ${fortune}`
document.querySelector('#fortune').innerText = fortuneRevealed


// buttton refresh page
function reloadPage() {
    location.reload(true);
}