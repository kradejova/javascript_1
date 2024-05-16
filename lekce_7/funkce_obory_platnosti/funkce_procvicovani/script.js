let cislo1 = null
let cislo2

const elInfo = document.querySelector("#nfo")
const elProdukt = document.querySelector('#produkt')

// //TypeError: cannot set properties of null -> pracuji s necim, co neni nadefinovane
// elInfo.textContent = "blabla"

const generujProdukt = (produkt) => {
    elProdukt.innerHTML = `
    <h2>${produkt.nazev}</h2>
    <p>Cena: <strong>${produkt.cena}</strong></p>
    `
}

const produkt = {
    nazev: "Televize",
    cena: 150
}

const nahodneCislo = () => {
    return Math.floor(Math.random() * 6)
}

const hodnota = generujProdukt(produkt)

if(elInfo === null) {
    console.log("Element nenalezen")
}

//undefined je klicove slovo stejne jako true nebo false
if(cislo2 === undefined) {
    console.log("Hodnota neni definovana")
}

//fce, kde je parametrem objekt
generujProdukt({nazev: "Mycka", cena: 4500})

console.log(cislo1)
console.log(cislo2)
console.log(elInfo)

//pokud fce nic nevraci, tak nic nevraci
console.log(hodnota)
console.log(nahodneCislo())