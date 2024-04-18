//document.body.innerHTML = "<p>paragraf</p><br>"
//document.body.textContent += "<h1>text</h1>"

//vstup od uzivatele

//const jmeno = prompt("Zadej jmeno:")
//document.body.innerHTML += "Ahoj uzivateli " + jmeno

// //konverze datovych typu
// const pocetHodin = Number(prompt("Zadej pocet hodin zamestnance")) // 100 => "100"
// const pocetHodinPrescasu = Number(prompt("Zadej pocet hodin prescasu")) // 10 => "10"
// // toString(), parseInt(), parseFloat() - stare, uz se to nepouziva
// const hodinovka = 200
// const vypocetMzdy = (pocetHodin * hodinovka) + (pocetHodinPrescasu * hodinovka + 100)
// const celkovyPocetHodin = pocetHodin + pocetHodinPrescasu

// document.body.innerHTML = "<p>Zamestnance odpracoval - " + celkovyPocetHodin + " hodin</p>"
// document.body.innerHTML += "<p>Zamestnance dostane plat - " + vypocetMzdy + " Kc.</p>"

//objekt
//prazdny objekt a vpisovani hodnot od uzivatele
// const tridni = prompt("Zadej jmeno tridniho: ")
// const nazevTridy = prompt("Zadej oznaceni tridy")
// const trida = {} //prazdny objekt

// trida.jmenoTridni = tridni
// trida.jmenoTridy = nazevTridy
// console.log(trida)

 const adresa = {
    //vlastnost : hodnota
    ulice: "Opletalova",
    //cisloPopisne: 33,
    "cislo popisne": 34,
    psc: "169 00",
    mesto: "Praha 6"
}
//vypis do console v developer tools
console.log(adresa)

adresa.ulice = "Fibichova"
adresa.ctvrt = "Dejvice"

//vypis na stranku pomoci vlastnosti objektu
document.body.innerHTML = "<p>Ulice: " + adresa.ulice + "</p>" + "<p>Cislo popisne: " + adresa["cislo popisne"] + "</p>"

console.log(adresa)

console.log(adresa)

//kod od lektora
//const adresa = "Opletalova 33, 169 00 Praha 6"

const adresa = {
    //vlastnost : hodnota
    ulice: "Opletalova",
    "cislo popisne": 33,
    psc: "169 00",
    mesto: "Praha 6",
    gps: {
        x: 12312.1231224,
        y: 12314.123123
    }
}

adresa.ulice = "Fibichova"
adresa.ctvrt = "Dejvice"

document.body.innerHTML = "<p>Ulice: " + adresa.ulice + "</p>" + "<p>Cislo popisne: " + adresa["cislo popisne"] + "</p>"

console.log(adresa)
console.log(adresa.gps.y)

