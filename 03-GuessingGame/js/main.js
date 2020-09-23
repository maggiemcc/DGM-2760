// Header:
document.querySelector('header > h1').innerText = "Guessing Game"
// document.querySelector('header > h2').innerText = "The Hi/Lo Game"
document.querySelector('header > h2').innerText = "Can you guess the number?"


// Pick a random number between 0 and 16
let correctNumber = Math.floor(Math.random() * 15)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

console.log(`The correct number is ${correctNumber}`)

function evalGuess() {
    totalGuesses += 1 // totalGuesses = totalGuesses +1
    gamerGuess = document.querySelector('#guess').value
    console.log(totalGuesses, gamerGuess)
    const feedback = document.querySelector('#feedback')


    // If gamerGuess and correctNumber are the same
    if (gamerGuess == correctNumber) {
        feedback.innerText = 'You are correct!'
        giveAward()
    } 
    // If gamerGuess is higher
    else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'Too high, please try again.'
    }
    // If gamerGuess is lower
    else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'Too low, please try again.'
    }
    // Need to choose a number between 1 & 16
    else {
        feedback.innerText = 'Please choose a number between 1 and 15 and try again.'
        // Won't include/takes away guess
        totalGuesses -=1
    }

    // Display number of attempts
    document.querySelector('#attempts').innerText = totalGuesses

}

function giveAward() {
    console.log('Congratulations!')
    let imagePath ='#'

    switch (totalGuesses) {
        // tries 1-3: blue ribbon
        case 1:
        case 2:
        case 3:
           imagePath ='images/blue.png'
           break;

        // tries 4-6: red ribbon
        case 4:
        case 5:
        case 6:
            imagePath ='images/red.png'
            break;
       
         // tries 7+: yellow ribbon
        default:
            imagePath ='images/yellow.png'
            break;
    }
    
    // Creates a <img> element
    const awardImage = document.createElement('img')
    awardImage.setAttribute('src', imagePath)
    const ribbon = document.querySelector('#ribbon')

    // Note: Only appendchild if the ribbon element doesn't have any child nodes yet
    // ribbon.appendChild(awardImage)
    
    if (ribbon.hasChildNodes(awardImage)) {
        let award = ribbon.childNodes;
      
        for (let i = 0; i < award.length && award.length < 2; i++) {
            ribbon.appendChild(awardImage);
        }}

 // attempts at Node.hasChildNodes()
    // const ribbon = document.querySelector('#ribbon');
    // if (ribbon.hasChildNodes()) {
    //     ;(function(awardImage) {
    //         ribbon.hasChildNodes = ribbon.hasChildNodes || function() {
    //           return !!this.firstChild;
    //         }
    //       })(Node.awardImage);
    // }
    


    // if (ribbon.hasChildNodes(awardImage)) {
    //     ribbon.hasChildNodes = ribbon.hasChildNodes || 
    //     function() {return !!this.firstChild;}
    // }    
 
}