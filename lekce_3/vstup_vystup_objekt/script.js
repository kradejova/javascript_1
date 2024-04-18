//document.body.innerHTML = "<p>paragraf</p><br>"
//document.body.textContent += "<h1>text</h1>"

//vstup od uzivatele

//const jmeno = prompt("Zadej jmeno:")
//document.body.innerHTML += "Ahoj uzivateli " + jmeno

//konverze datovych typu
const pocetHodin = Number(prompt("Zadej pocet hodin zamestnance")) // 100 => "100"
const pocetHodinPrescasu = Number(prompt("Zadej pocet hodin prescasu")) // 10 => "10"
// toString(), parseInt(), parseFloat() - stare, uz se to nepouziva
const hodinovka = 200
const vypocetMzdy = (pocetHodin * hodinovka) + (pocetHodinPrescasu * hodinovka + 100)
const celkovyPocetHodin = pocetHodin + pocetHodinPrescasu

document.body.innerHTML = "<p>Zamestnance odpracoval - " + celkovyPocetHodin + " hodin</p>"
document.body.innerHTML += "<p>Zamestnance dostane plat - " + vypocetMzdy + " Kc.</p>"