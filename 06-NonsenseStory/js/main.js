// Display Company Name & Sloagen, Main H1
document.querySelector('#company').innerText = "Nonsense Story";
document.querySelector('header > h2').innerText = "String Manipulation";
document.querySelector('#pageName').innerText = "The Tale of Nonsense"

let storyResult = document.querySelector('#story')

function tellStory() {
    // nounArray = querySelector('#noun') //lowercase string split()
    let nounArray = document.querySelector('#nouns').value.toLowerCase().split(/\s*[,\n." "]+\s*/)
    // let nounArray = document.querySelector('#nouns').value.toLowerCase().split(/\s+/)
    console.log(nounArray)

    // adjectives array
    let adjectiveArray = document.querySelector('#adjectives').value.toLowerCase().split(/\s*[,\n." "]+\s*/)
    console.log(adjectiveArray)


    // verbs array
   let verbArray = document.querySelector('#verbs').value.toLowerCase().split(/\s*[,\n." "]+\s*/)
   console.log(verbArray)


    // String story containing array data
    const myStory = `Once upon a time there were four <span>${adjectiveArray[0]}</span> <span>${nounArray[0]}s</span> named Romper, Dixie, Dazzle, and Rockefeller.
    They lived alone with a <span>${nounArray[1]}</span> named Mrs. Hollow. She is <span>${adjectiveArray[1]}</span> as can be due to all the <span>${nounArray[2]}</span> she <span>${verbArray[0]}s</span> each night in her <span>${adjectiveArray[2]} ${nounArray[3]}</span>.
    Now, my dears, said Mrs. Hollow, you may go over the <span>${nounArray[4]}</span> or around the <span>${nounArray[5]}</span>, but do not go into the <span>${nounArray[6]}’s</span> layer. The last <span>${nounArray[6]}</span> incident has caused enough problems for me, and I don’t need another.
    Now <span>${verbArray[1]}</span> along, and don't get into mischief. I am going to do some <span>${verbArray[2]}ing</span> while you are all away.`

    // get a reference to the querySelector('#story') = myStory
   storyResult.innerHTML = myStory
   console.log(myStory)
}

// display story once clicked
document.querySelector('#story').onClick = tellStory