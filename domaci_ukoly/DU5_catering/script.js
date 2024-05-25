//zadefinovani jednotlivych cateringu s vypoctem ceny podle poctu lidi
const justFood = (amount) => {
    const price = 50 * amount
    return `catering od Just Food pro ${amount} lidí za ${price} Kč`
}

const yourMama = (amount) => {
    const price = 250 * amount
    return `catering od Your Mama pro ${amount} lidí za ${price} Kč`
}

const flavourHaven = (amount) => {
    const price = 1500 * amount
    return `catering od Flavour Haven pro ${amount} lidí za ${price} Kč`
}

//overeni funkcnosti vyse zadefinovanych funkci
console.log(justFood(1))
console.log(yourMama(1))
console.log(flavourHaven(1))

//zadefinovani funkce, ktera pracuje s funkcemi cateringu
const createEvent = (nameEvent, amount, cateringName) => {
    //ve funkci je potreba zadat parametr (amount), jinak se misto stringu s vypoctem ceny zobrazi telo funkce
    return `Událost ${nameEvent} s ${cateringName(amount)}`
}

//zobrazeni na strance
document.body.innerHTML += `
<p>${createEvent("Zahaneni hladu ve 4 rano", 10, justFood)}
<p>${createEvent("Ukonceni kurzu Javascript 1", 10, yourMama)}
<p>${createEvent("Vydani nove verze aplikace", 10, flavourHaven)}
`