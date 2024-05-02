// //elNadpis -> element nadpis
// const elNadpis = document.querySelector("h1")
// //const elText = document.querySelector("p") -> vybere pouze prvni element p
// //const elText = document.querySelector(".modre-pozadi")
// const elText3 = document.querySelector("#text3")
// const elText5 = document.querySelector("#text5")
// const elProdukt = document.querySelector("#produkt")

// //vyber mi vsechna a, ktera maji na sobe element text5
// const elLink = document.querySelector("#text5 a")

// elNadpis.textContent = "Prepsal me JS"

// //menim styl elementu, barvu textu
// elNadpis.style.color = "gold"

// //zmena barvy pozadi
// elNadpis.style.backgroundColor = "deeppink"

// //font
// elNadpis.style.fontFamily = "Arial"

// //elText.textContent = "Prepsal me JS"

// elText3.textContent = "Pizza Hawai je nejlepsi"
// //elText5.textContent = "JS od Czechitas je super"

// elLink.href = "https://google.com"

// //vypis do konzole v developerTools
// console.log(elNadpis)


// elProdukt.innerHTML += `
// <h2>Pizza Hawai</h2>
// <p>Objednejte si chutnou pizzu!</p>
// `

const vek = Number(prompt("Zadej vek"))
const elInfo = document.querySelector("#info")

if(vek >= 18) {
    elInfo.textContent = "Vitej na strance"
    elInfo.classList.add("zeleny-text")
} else { 
    elInfo.textContent = "Pristup zamitnut"
    elInfo.classList.add("cerveny-text")
}

elInfo.className = "specialni-trida1 specialni-trida2"

