// Display Company Name & Sloagen, Main H1
document.querySelector('#company').innerText = "The Arborist";
document.querySelector('header > h2').innerText = "Events and Arrays";
document.querySelector('#pageName').innerText = "The Arborist"

// Create an array with 4 trees listed
const trees = ['oak', 'Pine', 'aspend', 'Bald Cyrpress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

// displayResults.textContent = 'Testing here.'
// errorElement.textContent = 'Testing here.'


// Similar to arrow function
    // const listTrees = function() {}

// Display list of trees inside displayResults div
const listTrees  = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`
}

listTrees()


// Add a redwood to the end, concise version
document.querySelector('#add_coconut').onclick = () => {
    trees.push('coconut')
    listTrees()
}

// Add a pear to the start
document.querySelector('#add_peach').onclick = () => {
    trees.unshift('peach')
    listTrees()
}



// Remove Tree 1
document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0) {
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = 'Cannot remove the first tree because there are none.'
    }
}

// // Remove Tree 2
document.querySelector('#remove_tree2').onclick = () => {
       if (trees.length > 1) {
        trees.splice(1 , 1)
        listTrees()
    } else {
        errorElement.textContent = 'Cannot remove the second tree because there are less than 2.'
    }
}

// // Remove last tree
document.querySelector('#remove_treeLast').onclick = () => {
        if (trees.length > 0) {
        trees.pop()
        listTrees()
    } else {
        errorElement.textContent = 'Cannot remove the last tree because there are none.'
    }
}

// Sort trees A-Z
document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    listTrees()
}

// Make trees lowercase
document.querySelector('#lowerTrees').onclick = () => {
    let lowercase = []
    lowercase = trees.map(trees => trees.toLowerCase())
    trees.splice(0, lowercase.length, ...lowercase)
    listTrees()
}

// // Show name 3
document.querySelector('#showName3').onclick = () => {
    if (trees.length > 2) {
        errorElement.textContent = trees[2]
    } else {
        errorElement.textContent = 'There are not enough trees to display the third tree.'
    }   
}

// // Show name 4
document.querySelector('#showName4').onclick = () => {
    if (trees.length > 3) {
        errorElement.textContent = trees[3]
    } else {
        errorElement.textContent = 'There are not enough trees to display the fourth tree.'
    }   
}