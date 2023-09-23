/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Abah Dominic Odeh";
const date = new Date();
let currentYear = date.getFullYear();
let profilePicture = "images/dominic_abah.png";



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
let imageElement = document.querySelector("img");




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);







/* Step 5 - Array */
let favoriteFood = ["Roasted Yam","Vegetable Soup", "Porridge Beans", "Boiled Eggs", "Pounded Yam"];
let bestFood = "Bean Cake";
favoriteFood.push(bestFood);
for (const myFood of favoriteFood)
{
    foodElement.innerHTML += `<br>${myFood},`;
}

favoriteFood.shift();
for (const myFood of favoriteFood)
{
    foodElement.innerHTML += `<br>${myFood},`;
}

favoriteFood.pop();
for (const myFood of favoriteFood)
{
    foodElement.innerHTML += `<br>${myFood},`;
}


