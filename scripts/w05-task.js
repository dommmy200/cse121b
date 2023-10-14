/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElement = document.querySelector("#temples");
var templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    const arr = Array.from(temples);
    arr.forEach(element => {
        const article = document.createElement("article");
        
        const h3 = document.createElement("h3");
        //
        h3.textContent = `${element.templeName}`;
        
        const img = document.createElement("img");
        img.setAttribute("src", element.imageUrl);
        img.setAttribute("alt", element.location);
        
        article.appendChild(h3);
        article.appendChild(img);

        templeElement.appendChild(article);
    });
}



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    var response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = JSON.stringify(response);

    displayTemples(templeList);
}

/* reset Function */
// const reset = function() {
//     templeElement.removeChild("article");
// }


/* Display helper function */
const subTempleList = async () => {
    var response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = JSON.stringify(response);

    var subTemples = [];
    templeList.forEach( temple => {
        var templeLocation = temple.location;
        if (templeLocation.includes(locationID)){
            subTemples.push(temple);
        }
    });
    displayTemples(subTemples);
}


/* sortBy Function */
const sortBy = function(event) {
    

    switch (event) {
        case "utah":
            
            subTempleList();
            
            break;
        case "nonutah":
            
            subTempleList();
            
            break;
        case "older":
            
            subTempleList();
            
            break;
        case "all":
            
            getTemples();
            
            break;
        default:
            
            getTemples();
            
    }
}

/* Event Listener */
const sel = document.querySelector("#sortBy");
sel.addEventListener("change", (event) => {
    
    sortBy(event);
});