//Vyplata jako stranka
const hodinovaSazbaKoruny = Number(prompt("Zadejte hodinovou sazbu v Kc: "))
//const pocetHodinDen = 8 
const pocetHodinDen = Number(prompt("Zadejte pocet odpracovanych hodin v jednom dni: "))
//const pocetDniMesic = 21 
const pocetDniMesic = Number(prompt("Zadejte pocet odpracovanych dni v mesici: "))
const vypocetMzdy = hodinovaSazbaKoruny * pocetHodinDen * pocetDniMesic

document.body.innerHTML = "<p>Vyse Vasi vyplaty za dany mesic je " + vypocetMzdy + " Kc</p>"



