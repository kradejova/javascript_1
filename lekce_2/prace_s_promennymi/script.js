//Lekce 2

//promenne
//deklarace promenne pomoci var uz se nepouziva, kvuli bezpecnosti
var jmeno1 = "Michal"

//
let jmeno2 = "Oksana"

//hodnota v promenne const zustava nemenna, vetsinou se pouziva const
const jmeno3 = "Tomas"

//pri prepisovani hodnot promennych se uz let ani const nepouziva
jmeno2 = "Jirka"

//prepisovani v const - TypeError v console v developer tools
//jmeno3 = "Lenka"

document.body.innerHTML = jmeno1 + " " + jmeno2 + " " + jmeno3

//priklad Vyplata
let hodinovka = 3000
let pocetHodin = 160
let vyplata = hodinovka * pocetHodin
hodinovka = 4500
hodinovka += 100 //hodinovka = hodinovka + 100
hodinovka *= 100 //hodinovka = hodinovka * 100
//hodnota vyplaty se prepise na vyssi castku, protoze se pocita z 4500
vyplata = hodinovka * pocetHodin

document.body.innerHTML = vyplata