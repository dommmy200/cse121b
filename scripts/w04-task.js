/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Dominic Abah",
    photo: "images/dominic_abah.png",
    favoriteFood: [
        "Roasted Yam",
        "Vegetable Soup", 
        "Porridge Beans", 
        "Boiled Eggs", 
        "Pounded Yam"
    ],
    hobbies: [
        "Paper BasketBall",
        "Reading",
        "Piano",
        "Rubik's Cube",
        "Video Game",
        "Puzzle Solving"
    ],
    placesLived: [],

};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Ikeja, Lagos",
        length: "13 years"
    }
)

myProfile.placesLived.push(
    {
        place: "Naze, Owerri",
        length: "10 years"
    }
)
myProfile.placesLived.push(
    {
        place: "Town, Makurdi",
        length: "11 years"
    }
)

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile["name"];

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile["name"]);

/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food =>
       {
        let li = document.createElement("li");
        li.textContent = food;
        document.querySelector("#favorite-foods").appendChild(li);
       }
)

/* Hobbies List */
myProfile.hobbies.forEach(hobby =>
    {
     let li = document.createElement("li");
     li.textContent = hobby;
     document.querySelector("#hobbies").appendChild(li);
    }
)

/* Places Lived DataList */
myProfile.placesLived.forEach(obj => 
{
    let dt = document.createElement("dt");

    const contentStr = `<strong>${obj.place}</strong>`;
    dt.innerHTML = contentStr
    
    let dd = document.createElement("dd");
    const contentStr1 = `<font size="2">${obj.length}</font>`;
    dd.innerHTML = `\uD83C\uDF00\x0A${contentStr1}`

    const appendBreak = `<br>`;
    
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
   
    dd.style.padding = "0px 0px 4px 0px";
  
})

