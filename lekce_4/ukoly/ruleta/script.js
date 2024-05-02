// cisla 0 - 36
// 1 - 10, 19 - 28: licha - cervena, suda - cerna
// zbytek: licha - cerna, suda - cervena
//0 - ani cervena, ani cerna

const cislo = Number(prompt("Zadejte cislo od 0 do 36:"))
const sude = "sude"
const liche = "liche"
const cernaBarva = "cerne"
const cervenaBarva = "cervene"

if (cislo === 0) {
    document.body.innerHTML += 
    `
    <p>Cislo je ${cislo}.</p>
    `
} else if ((cislo >= 0 && cislo <= 10) || (cislo >= 19 && cislo <= 28)) {
    if (cislo%2 === 0) {
        document.body.innerHTML += 
        `
        <p>Cislo ${cislo} je ${sude} a ${cernaBarva}.</p>        
        `
    } else {
        document.body.innerHTML += 
        `
        <p>Cislo ${cislo} je ${liche} a ${cervenaBarva}.</p>
        `
    }
} else if ((cislo >= 11 && cislo <= 18) || (cislo >= 29 && cislo <= 36)) {
    if (cislo%2 === 0) {
        document.body.innerHTML +=
        `
        <p>Cislo ${cislo} je ${liche} a ${cervenaBarva}.</p>
        `
    } else {
        document.body.innerHTML +=
        `
        <p>Cislo ${cislo} je ${sude} a ${cernaBarva}.</p>
        `
    }
} else {
    document.body.innerHTML +=
    `
    <p>Cislo neni v rozmezi od 0 do 36.</p>
    `
}