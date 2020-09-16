// Header:
document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "This IZ Chief Inspector Clouseau"

function reDisplay() {
    // Window hight and width:
    let windowSizes = `Your window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
    // Window offset:
    let offset = `Your window offset is ${window.screenX} pixels from the left edge and ${window.screenY} pixels from the top of the display.`
    // URL for page
    let url = `The URL for this page is ${document.URL}`
    // Display Window size, offset, and url
    let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset} \n ${url}`
    
    // Another way:
    // let myWindow = document.querySelector('#myWindow').innerText = windowSizes + '\n' + offset

    // Display document title and update time
    let docTitle = `The document title is: ${document.title}`
    let lastMotif = `This document was last updated on: ${document.lastModified}`
    let myDocument = document.querySelector('#myDocument').innerText = `${docTitle} \n ${lastMotif}`
}
reDisplay()
