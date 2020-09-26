// Display Company Name & Sloagen, Main H1
document.querySelector('#company').innerText = "Whose Tomb?";
document.querySelector('header > h2').innerText = "Literal Objects";
document.querySelector('#pageName').innerText = "Whose Tomb?"

const question = {
    stem: "Who is buried in the Tomb?",
    option1: "Dick",
    option2: "Larry",
    option3: "Harry",
    option4: "Waldo",

    // Correct Answer
    correct: 4,

    // Methods, show properties
    display: () => {
        // Display the question
        document.querySelector('#stem').textContent = question.stem
        // Display answer options
        document.querySelector('#answer1').textContent = question.option1
        document.querySelector('#answer2').textContent = question.option2
        document.querySelector('#answer3').textContent = question.option3
        document.querySelector('#answer4').textContent = question.option4
    },

    check: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector(".feedback").textContent = "You are Correct! May he rest in peace."
        }
        else {
            document.querySelector(".feedback").textContent = "You are Incorrect. Please try again!"
        }
    }

}

document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))
document.querySelector('#answer3').addEventListener('click', () => question.check(3))
document.querySelector('#answer4').addEventListener('click', () => question.check(4))

question.display()