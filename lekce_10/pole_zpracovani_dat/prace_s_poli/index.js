// //objekt

// const kniha = {
//     nazev: "Superkniha",
//     cena: 1050,
//     skladem: true
// }

// //pole
// const jmena = ["Michal", "Jakub", "Jana","Martina", "Sara"]

// console.log(jmena[2])
// //kdyz zadam spatny index v poli, v konzoli se zobrazi undefined

// const ovoce = ["jablko", "hruska"]

// //vicerozmerne pole
// const tridy = [
//     ["Michal", "Jana", "Marek"], 
//     ["Martina", "Lucka", "Kamil"]
// ]
// //prvni hranate zavorky vyberou prvni pole, druhe zavorky vyberou konkretni jmeno
// console.log(tridy[1][1])

// const tridy2 = [
//     //objekt na nulte pozici
//     {
//         nazev: "1.A",
//         zaci: [
//             "Milan",
//             "Katerina",
//             "Karel"
//         ]
//     },
//     //objekt na prvni pozici
//     {
//         nazev: "2.B",
//         zaci: [
//             "Karolina",
//             "Josef",
//             "Dalibor"
//         ]
//     }
// ]

// //vypis nazvu tridy
// console.log(tridy2[1].nazev)
// //vypis konkretniho zaka
// console.log(tridy2[1].zaci[1])

//metody navazane na poli
//pole
// const jmena = ["Michal", "Jakub", "Jana","Martina", "Sara"]

// console.log(`Pocet polozek ${jmena.length}`)

// //pridani polozky na konec pole
// jmena.push("Josef")
// console.log(`Nova podoba pole: ${jmena}`)

// //pridani polozky na zacatek pole
// jmena.unshift("Tomas")
// console.log(`Nova podoba pole: ${jmena}`)

// //odebrani z konce pole
// jmena.pop()
// console.log(`Nova podoba pole: ${jmena}`)

// //odebrani nulteho prvku z pole
// jmena.shift()
// console.log(`Nova podoba pole: ${jmena}`)

// //bacha, je to case sensitive
// console.log(`Je v poli jakub? -> ${jmena.includes("jakub")}`)

// console.log(`Jmeno Martina se nachazi na indexu: ${jmena.indexOf("Martina")}`)
// //pokud se jmeno nevyskytuje v poli, zobrazi se index -1
// console.log(`Jmeno Martina se nachazi na indexu: ${jmena.indexOf("Libor")}`)

// //od 0 do indexu 3, ale bez polozky na 3. indexu
// console.log(`${jmena.slice(0,3)}`)

//cykly
//pole
// const jmena = ["Michal", "Jakub", "Jana","Martina", "Sara"]

// //argument metody je funkce
// jmena.forEach((hodnota, index) => {
//     document.body.innerHTML += `<p>
//     ${index + 1}: ${hodnota}@czechitas.cz
//     </p>`
// })

