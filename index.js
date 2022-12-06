const ulList = document.querySelector("#links > ul")
const containerOne = document.querySelector("#container1")

function displayDrinks(drinkObj){
    const drinkImg = document.createElement("img")
    drinkImg.src = drinkObj.imageUrl
    drinkImg.alt = drinkObj.name
    ulList.appendChild(drinkImg)
}

function displayFirstDrink(drinkObj){
    const drinkImg = document.createElement("img")
    drinkImg.src = drinkObj.imageUrl
    drinkImg.alt = drinkObj.name
    containerOne.appendChild(drinkImg)

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