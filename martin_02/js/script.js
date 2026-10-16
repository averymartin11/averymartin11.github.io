// selector for the element 
const clickButton = document.querySelector(".clickButton");


// listen for the 'click' event, then do two things:
// - print literal text to the console
// - print all the info about the event that triggered this
clickButton.addEventListener("click", (event) => {
	console.log("Click Event On Button");
	console.log(event);
})

// Change drink when a new one is selected
const drinkChoice = document.querySelector("#drinkChoice");
const drink = document.querySelector("#drink");

drinkChoice.addEventListener("change", (event) => {
    drink.textContent = event.target.value;
});

// Change cafe card color
const colorChoice = document.querySelector("#colorChoice");
const cafe = document.querySelector("#cafe");

colorChoice.addEventListener("change", (event) => {
    cafe.style.backgroundColor = event.target.value;
});

// Show message when order is saved
const message = document.querySelector("#message");

clickButton.addEventListener("click", (event) => {
    message.textContent = "Your order is saved!";
});

const whippedCream = document.querySelector("#whippedCream");
const toppingMessage = document.querySelector("#toppingMessage");

whippedCream.addEventListener("change", (event) => {
    if (event.target.checked) {
        toppingMessage.textContent = "Whipped cream added!";
    } else {
        toppingMessage.textContent = "";
    }
});