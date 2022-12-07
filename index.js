const ulList = document.querySelector("#links > ul")
const drinkImage = document.getElementById("drink-image")
const drinkName = document.getElementById("drink-name")
const drinkinstructions = document.getElementById("drink-instructions")
const drinkingredients = document.getElementById("drink-ingredients")
const newDrinksForm = document.getElementById("container3")

const handleClick= (drink) => {
    
}


function displayDrinks(drinkObj){
    const drinkImg = document.createElement("img")
    drinkImg.src = drinkObj.imageUrl
    drinkImg.alt = drinkObj.name 
    drinkImg.addEventListener("click", () => handleClick(drinkObj))
    ulList.appendChild(drinkImg)
   
}




//fetch function
const fetchDrinks = () => {
    fetch("http://localhost:3000/drinks")
    // .then(res => console.log(res))}
    .then(response =>response.json())
    .then(drinks => drinks.forEach(displayDrinks))
    .catch(error => alert(error))
    }

fetchDrinks()


