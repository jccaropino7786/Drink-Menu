const ulList = document.querySelector("#links > ul")

//surapat code starts
let togglePartyModeBtn = document.querySelector("#partyToggle")
let toggleDarkModeBtn = document.querySelector("#darkToggle")


togglePartyModeBtn.addEventListener('click', partyMode)
toggleDarkModeBtn.addEventListener('click', darkMode)

function partyMode() {
    let togglePartyBtn = document.body;
    togglePartyBtn.classList.toggle("party-mode");
    let colors = ['red','yellow','blue','green','orange','purple','rainbow'];

setInterval(() => {
    document.body.style.setProperty('--bgColor', colors[Math.floor(Math.random() * 5)]);
}, 1000);
}

function darkMode() {
    let toggleDarkBtn = document.body;
    toggleDarkBtn.classList.toggle("dark-mode");
  }
//surapat code stops here

function displayDrinks(drinkObj){
    const drinkImg = document.createElement("img")
    drinkImg.src = drinkObj.imageUrl
    drinkImg.alt = drinkObj.name
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