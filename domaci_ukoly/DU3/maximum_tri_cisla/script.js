const cislo1 = Number(prompt("Zadej prvni cislo:"))
const cislo2 = Number(prompt("Zadej druhe cislo:"))
const cislo3 = Number(prompt("Zadej treti cislo:"))
const msg = "Nelze rozhodnout."

const max3 = (cislo1, cislo2, cislo3) => {
    if (cislo1 > cislo2 && cislo1 > cislo3) {
        return cislo1
    } else if (cislo2 > cislo1 && cislo2> cislo3) {
        return cislo2 
    } else if (cislo3 > cislo1 && cislo3 > cislo2) {
        return cislo3
    } else {
        return msg
    }
}

document.body.innerHTML += `
<p><b>Prvni cislo</b>: ${cislo1}<br>
<b>Druhe cislo</b>: ${cislo2}.<br>
<b>Treti cislo</b>: ${cislo3}<br>
<b>Nejvetsi cislo ze zadanych cisel</b>: ${max3(cislo1, cislo2, cislo3)}</p>
`