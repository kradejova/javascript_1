const blikaniZarovkou = document.querySelector("#app")

//pri kliknuti kdekoli na strance se zapne nebo vypne zarovka
blikaniZarovkou.addEventListener("keypress", () => {
    blikaniZarovkou.classList.toggle("bulb--on")
})

//console.log('funguju!');
