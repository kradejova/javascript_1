const blikaniZarovkou = document.querySelector(".bulb")

//pri stisknuti klavesy kdekoli na strance se zapne nebo vypne zarovka
blikaniZarovkou.addEventListener("keypress", () => {
    blikaniZarovkou.classList.toggle("bulb--on")
})

//console.log('funguju!');
