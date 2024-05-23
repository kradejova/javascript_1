// //funkce kalkulacka
// // const kalkulacka = (n1, n2, operace) => {
// //     if (operace === "+") {
// //         return n1 + n2
// //     } else if (operace === "-") {
// //         return n1 - n2
// //     } else if (operace === "*") {
// //         return n1 * n2
// //     } else if (operace === "/") {
// //         if(n2 === 0) {
// //             return "Nelze delit nulou"
// //         } else {
// //             return n1/n2
// //         }
// //     }
// // }

// // console.log(kalkulacka(1,1,"+"))
// // console.log(kalkulacka(1,1,"-"))
// // console.log(kalkulacka(1,1,"*"))
// // console.log(kalkulacka(1,1,"/"))
// // console.log(kalkulacka(1,0,"/"))

// //zjednoduseni kalkulacky
// const scitani = (n1, n2) => {
//     return n1 + n2
// }

// const odcitani = (n1, n2) => {
//     return n1 - n2
// }

// const nasobeni = (n1, n2) => {
//     return n1 * n2
// }

// const deleni = (n1, n2) => {
//     return n1/n2
// }

// const kalkulacka = (n1, n2, operace) => {
//     //vracim fci, ktera si bere n1 a n2 jako parametry5
//     return operace(n1, n2)
// }

// console.log(kalkulacka(3, 2, nasobeni))

// //prace s objektem a fci jako argumentem
// const showsList = document.querySelector('.shows-list');

// const formatGb = (date) => {
//     const paddedDay = String(date.day).padStart(2, '0'); // 1 -> 01
//     const paddedMonth = String(date.month).padStart(2, '0');
//     return `${paddedDay}/${paddedMonth}/${date.year}`;
// };

// const formatUs = (date) => {
//     const paddedMonth = String(date.month).padStart(2, '0');
//     const paddedDay = String(date.day).padStart(2, '0');
//     return `${paddedMonth}/${paddedDay}/${date.year % 100}`;
// };

// const renderShow = (name, date, format) => {
//     return `
//       <div class="show">
//         <h2>${name}</h2>
//         <p>${format(date)}</p>
//       </div>
//     `;
// };

// showsList.innerHTML += renderShow("Lekce s Misou", {
//     day: 23,
//     month: 5,
//     year: 2024
// }, formatUs)

// showsList.innerHTML += renderShow("Lekce s Kubou", {
//     day: 30,
//     month: 5,
//     year: 2024
// }, formatGb)

//casovace
// const pozdrav = () => {
//     console.log("Ahoj")
// }

// setTimeout(pozdrav, 3000) //pozdrav se vypise po 3s
// setInterval(pozdrav, 3000) //pozdrav se vypise v urcitem intervalu

// //odpocet casu na strance
// let sekundy = 20
// const ms = 10000

// const kviz = () => {
//     document.body.innerHTML = `<p>${sekundy}</p>`
//     sekundy--
// }
// setInterval(kviz, 1000)

// //anonymni fce (lambda fce)
// setInterval(() => {
//     document.body.innerHTML = `<p>${sekundy}</p>`
//     sekundy--
// }, 1000)

//udalosti
const elInfo = document.querySelector("#info")
const elBtn = document.querySelector("#button")

// console.log(`${elInfo}, ${elBtn}`)

// //click - klicove slovo navazane k danemu prvku
// elBtn.addEventListener("click", () => {
//     alert("SURPRISE!!!!!!")
//     elInfo.style.color = "red"
//     elInfo.style.backgroundColor = "yellow"
// })

let counter = 0
elBtn.addEventListener("click", () => {
    counter++
    elInfo.textContent = `pocet kliknuti: ${counter}`
})

elInfo.addEventListener("mouseover", () => {
    elInfo.style.color = "gold"
    elInfo.classList.toggle("zlata")
})