const cislo1 = Number(prompt("Zadej prvni cislo:"))
const cislo2 = Number(prompt("Zadej druhe cislo:"))
const msg = "Cisla jsou si rovna."

const max2 = (cislo1, cislo2) => {
    if(cislo1 > cislo2) {
        return cislo1
    } else if (cislo1 === cislo2) {
        return msg
    }
    return cislo2
}

document.body.innerHTML += `
<p>Prvni cislo: ${cislo1}<br>
Druhe cislo: ${cislo2}<br>
Maximum danych cisel: ${max2(cislo1, cislo2)}</p>
`