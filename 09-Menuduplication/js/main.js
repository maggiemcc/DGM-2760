function dulplicateMenu() {
    // get all anchor elements from top menu, node list
    let topList = document.querySelectorAll('ul#primaryNavigation li a')

    // create new list items for bottom of page
    let newList = document.createElement('ul')

    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
 
        document.querySelector('#smallNavArea').appendChild(newList)
        newLink.textContent = menuItem.innerText

        newList.appendChild(newLink)
        newList.appendChild(newLI)
        newLI.appendChild(newLink)
    })
}

dulplicateMenu()