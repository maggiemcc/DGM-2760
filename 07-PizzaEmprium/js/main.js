// Display Company Name & Sloagen, Main H1
document.querySelector('#company').innerText = "Pizza Emporium";
document.querySelector('header > h2').innerText = "Literal Objects";
document.querySelector('#pageName').innerText = "Pizza Order Form"

let message

// object literal
const pizza = {
    crust: 'thin',
    size: 'small',
    topping: 'pepperoni',

    // method
    buildPizza: function () {
        console.log('buildPizza method has been called')
        message = `We are baking a ${pizza.size} ${pizza.crust} crust pizza with ${pizza.topping} topping and cheese just for you.`
        document.querySelector('#feedback').textContent = message
    },

    shoppingList: () => {
        let flour = 1
        let top = 6
        //  thick pizza
        if (pizza.crust === 'thick') flour *= 2
        if (pizza.crust === 'thick') top *= 1
        // medium pizza
        if (pizza.size === 'medium') flour *= 2
        if (pizza.size === 'medium') top *= 2
        // large pizza
        if (pizza.size === 'large') flour *= 3
        if (pizza.size === 'large') top *= 3

        message = `For a ${pizza.size} ${pizza.crust} crust pizza you will need to purachse ${flour} cups of flour and ${top} oz of ${pizza.topping}.`
        document.querySelector('#feedback').textContent = message
    }

}

// Long way for crust/buildPizza method
// let thinButton = document.querySelector('#thin')
// thinButton.addEventListener('click', function () {
//     return pizza.crust = 'thin'
// })

// let buildButton = document.querySelector('#build')
// buildButton.addEventListener('click', function () {
//     return pizza.buildPizza()
// })

// Compact way for Crust
document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

// Toppings
document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')
document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')

// Size
document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#medium').addEventListener('click', () => pizza.size = 'medium')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

// Hook up shoppingList and buildPizza method 
document.querySelector('#build').addEventListener('click', pizza.buildPizza)
document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)
