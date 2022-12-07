const ulList = document.querySelector("#links > ul")
const containerOne = document.querySelector("#container1")
const containerTwo = document.querySelector("#container2")
const drinkName = document.querySelector("#container2 > h1")
const drinkDirections = document.querySelector("#container2 > h4")
const drinkIngredients = document.querySelector("#ingredientsContainer")
const drinkForm = document.querySelector("#container3 > form")


function handleClick(drink){
    containerOne.innerHTML = ("")
    const drinkImg = document.createElement("img")
    drinkImg.src = drink.imageUrl
    drinkImg.alt = drink.name
    containerOne.appendChild(drinkImg)

    
    drinkName.innerText = drink.name
    drinkDirections.innerText = drink.instruction
    drinkIngredients.innerText = ("")
    
    
   drink.ingredient.forEach(displayIngredient)
        
}
const handleSubmit = (e) => {
    e.preventDefault()
    // debugger
    const drinkName = e.target.drinkTitle.value
    const drinkImg = e.target.imageURL.value
    const drinkIngOne = e.target.ingredient1.value
    const drinkIngTwo = e.target.ingredient2.value
    const drinkIngThree = e.target.ingredient3.value
    const drinkIngFour = e.target.ingredient4.value
    const drinkInstruction = e.target.instruction.value
      const newDrink = {
        name:drinkName,
        instruction:drinkInstruction,
        imageUrl:drinkImg,
        ingredient:[drinkIngOne,drinkIngTwo,drinkIngThree,drinkIngFour],
      }
    //   e.target.reset()
    debugger
        containerOne.innerHTML =("")
        drinkIngredients.innerHTML = ("")
        displayFirstDrink(newDrink)
        displayDrinks(newDrink)
        // newDrink.ingredient.forEach(displayIngredient)
 }



function displayIngredient(ingredient){
    // debugger
    const inLi = document.createElement("li")
        inLi.innerText = ingredient
        drinkIngredients.appendChild(inLi)
            if(inLi.innerText === ("")){
                drinkIngredients.removeChild(inLi)
            }
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
    drinkObj.ingredient.forEach(displayIngredient)

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
drinkForm.addEventListener('submit', handleSubmit)

let darkToggle = document.querySelector('#darkToggle');

darkToggle.addEventListener('change', ()=> {
  document.body.classList.toggle('dark');
});