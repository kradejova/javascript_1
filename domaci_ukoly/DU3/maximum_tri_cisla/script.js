const cislo1 = Number(prompt("Zadej prvni cislo:"))
const cislo2 = Number(prompt("Zadej druhe cislo:"))
const cislo3 = Number(prompt("Zadej treti cislo:"))

const max2 = (cislo1, cislo2) => {
    if(cislo1 > cislo2) {
        return cislo1
    } 
    return cislo2
}

const max3 = (cislo1, cislo2, cislo3) => {
    
    const vysledek1 = max2(cislo1, cislo2)
    console.log(vysledek1)

    const vysledek2 = max2(cislo1, cislo3)
    console.log(vysledek2)

    const vysledek3 = max2(cislo2, cislo3)
    console.log(vysledek3)

    let finalniVysledek = null

    //vysledky jsou si rovny, nasleduje porovnani vysledku    
    if (vysledek1 === vysledek2 && vysledek1 === vysledek3) {
        return vysledek1
    } else {
        if (vysledek1 === vysledek2 ) {
            return finalniVysledek = cislo1
        } else if (vysledek2 === vysledek3) {
            return finalniVysledek = cislo3
        } else if (vysledek1 === vysledek3) {
            return finalniVysledek = cislo2
        } 
    }

}

document.body.innerHTML += `
<p><b>Prvni cislo</b>: ${cislo1}<br>
<b>Druhe cislo</b>: ${cislo2}<br>
<b>Treti cislo</b>: ${cislo3}<br>
<b>Nejvetsi cislo ze zadanych cisel</b>: ${max3(cislo1, cislo2, cislo3)}</p>
`