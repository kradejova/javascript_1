//importy
//definice funkci
//zbytek kodu



//vytvoreni funkce
//parametr funkce je v (), v prikladu nize je to (jmeno)
const pozdrav = (jmeno, pracovniPozice) => {
    console.log(`Ahoj uzivateli ${jmeno}, (${pracovniPozice})`)
}

//vytvoreni funkce
const jePlnolety = (vek) => {
    if(vek >= 18) {
        return true
//     } else {
//         return false
//     }
// }
    } 
    
    return false
}

//volani funkce
pozdrav("Kaja", "tester")
pozdrav("Bara", "CEO")
pozdrav("Michal", "IT lektor")

console.log(jePlnolety(20))
console.log(jePlnolety(3))
