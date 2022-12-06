const 



const displayDrink = (drinkObJ) => {
    const drinkImg = document.createElement("img")
    drinkImg.src = drinkObj.imageUrl
    drinkImg.alt = drinkObj.name


}


//fetch function
const fetchDrinks = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then(response => response.json())
    .then(drinks => drinks.forEach(displayDrink))
    .catch(error) => alert(error)
}

fetchDrinks()