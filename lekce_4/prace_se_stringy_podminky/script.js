const jmeno = prompt("Zadej jmeno")

// //odstraneni white spaces z obou stran
// document.body.innerHTML += "<p>" + jmeno.trim() + "</p>"
// //end
// document.body.innerHTML += "<p>" + jmeno.trimEnd() + "</p>"
// //start
// document.body.innerHTML += "<p>" + jmeno.trimStart() + "</p>"

// document.body.innerHTML += "<p>" + jmeno.length + "</p>"
// document.body.innerHTML += "<p>" + jmeno.toUpperCase() + "</p>"
// document.body.innerHTML += "<p>" + jmeno.toLowerCase() + "</p>"

// //odseknuti kusu retezce, ve jmene Kaja bude vysledek aja
// document.body.innerHTML += "<p>" + jmeno.slice(2,4) + "</p>"

// //vypsani indexu podretezce, -1 znamena, ze tam ten podretezec neni
// document.body.innerHTML += "<p>" + jmeno.indexOf("ja") + "</p>"

// //doplneni stringu podle zadanych parametru v metode padStart, napr. pro vyplneni telefonu (v tomto pripade se doplni predvolba)
// document.body.innerHTML += "<p>" + jmeno.padStart(13,"+420") + "</p>"

// //doplneni nulama do stringu dlouheho 9 znaku
// document.body.innerHTML += "<p>" + jmeno.padEnd(9, "0") + "</p>"

//interpolace, alt+96, bacha jine uvozovky - zpetne uvozovky
// document.body.innerHTML += `
//     <p>${hodnota.padStart(13, "+420")}</p>
//     <p>${hodnota.padEnd(9, "0")}</p>
// `


//podminky
const pravda = true
const nepravda = false

const vek = 18
const heslo = "simsalabim"

// > >= < <= === !== 
if(vek >= 18) {
    document.body.innerHTML = `Je ti ${vek}, vitej na strance!`
} else {
    document.body.innerHTML = `Je ti ${vek}, musis jeste dospet!`
}

// = === ==
// hodnota dat. typ
if(vek === "18") {
    console.log(true)
} else {
    console.log(false)
}

// hodnota
if(vek == "18") {
    console.log(true)
} else {
    console.log(false)
}

//ternarni operator (jednoradkova podminka)
let dospelost = null

if (vek >= 18) {
    dospelost = "dospely"
} else {
    dospelost = "mladenec"
}

dospelost = vek >= 18 ? "dospely" : "mladenec"




//else if 
const vyslednaZnamka = 2

if(vyslednaZnamka === 1) {
    console.log("Vyborny")
    //if(){} - muzou byt dalsi podminky v podminkach
} else if(vyslednaZnamka === 2) {
    console.log("Chvalitebny")
} else if(vyslednaZnamka === 3) {
    console.log("Dobry")
} else if(vyslednaZnamka === 4) {
    console.log("Dostatecny")
} else if(vyslednaZnamka === 5) {
    console.log("Nedostatecny")
} else {
    console.log("ERROR: Spatna hodnota")
}





