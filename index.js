const ulList = document.querySelector("#links > ul")
const containerOne = document.querySelector("#container1")
const containerTwo = document.querySelector("#container2")
const drinkName = document.querySelector("#container2 > h1")
const drinkDirections = document.querySelector("#container2 > h2")
const drinkIngredients = document.querySelector("#ingredientsContainer")

function handleClick(drink){
    containerOne.innerHTML = ("")
    const drinkImg = document.createElement("img")
    drinkImg.src = drink.imageUrl
    drinkImg.alt = drink.name
    containerOne.appendChild(drinkImg)

    
    drinkName.innerText = drink.name
    drinkDirections.innerText = drink.instruction
    drinkIngredients.innerText = ("")
    
    
    drink.ingredient.forEach(displayIngredient(drink.ingredient))
        
    // drink.forEach(displayIngerdients(drink.ingredient)) 
}

function displayIngredient(ingredient){
    const inLi = document.createElement("li")
        inLi.innerText = ingredient.ingredient
        drinkIngredients.appendChild(inLi)
    
}


function displayDrinks(drinkObj){
    const drinkImg = document.createElement("img")
    drinkImg.src = drinkObj.imageUrl
    drinkImg.alt = drinkObj.name
    ulList.appendChild(drinkImg)
    drinkImg.addEventListener('click', (e) => handleClick(drinkObj, e))
}

function displayFirstDrink(drinkObj){
    const drinkImg = document.createElement("img")
    drinkImg.src = drinkObj.imageUrl
    drinkImg.alt = drinkObj.name
    containerOne.appendChild(drinkImg)
    drinkName.innerText = drinkObj.name
    drinkDirections.innerText = drinkObj.instruction

}

//fetch function
const fetchDrinks = () => {
    fetch("http://localhost:3000/drinks")
    // .then(res => console.log(res))}
    .then(response =>response.json())
    .then(drinks => {
        displayFirstDrink(drinks[0])
        drinks.forEach(displayDrinks)
    })
    // .then(drinks => drinks.forEach(displayDrinks))
    // .catch(error => alert(error))
    }

fetchDrinks()