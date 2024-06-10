const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];


//   Vypište do stránky všechna čísla.
document.body.innerHTML += `<p><b>Vsechna cisla:</b> ${numbers}</p>`

//   Vypište do stránky druhé mocniny všech čísel.
const druhaMocnina = numbers.map((number) => {
      return Math.pow(number, 2)
})

document.body.innerHTML += `<p><b>Druhe mocniny cisel:</b> ${druhaMocnina}</p>`

//   Vypište do stránky pouze záporná čísla.
const zapornaCisla = numbers.filter((number) => number < 0).map((number) => {
        return number
})

document.body.innerHTML += `<p><b>Zaporna cisla:</b> ${zapornaCisla}</p>`

//   Vypište do stránky absolutní hodnotu všech čísel.
const absolutniHodnota = numbers.map((number) => {
    return Math.abs(number)
})

document.body.innerHTML += `<p><b>Absolutni hodnoty cisel:</b> ${absolutniHodnota}</p>`

//   Vypište do stránky pouze sudá čísla.
const sudaCisla = numbers.filter((number) => number%2 === 0).map((number) => {
    return number
})

document.body.innerHTML += `<p><b>Suda cisla:</b> ${sudaCisla}</p>`

//   Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
const absolutniHodnotaDelitelnaTremi = numbers.filter((number) => Math.abs(number)%3 === 0).map((number) => {
    return number
})

document.body.innerHTML += `<p><b>Cisla s absolutni hodnotou delitelnou tremi:</b> ${absolutniHodnotaDelitelnaTremi}</p>`

//   Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
numbers.forEach((number) => {
  //odecitam 1, protoze indexujeme od 0, pokud to neodectu, je vzdalenost posunuta o 1
  const vzdalenost = (numbers.length - numbers.indexOf(number)) - 1
  document.body.innerHTML += `<p><b>Vzdalenost cisla ${number} od cisla 5:</b> ${vzdalenost}</p>`
})
//   Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
numbers.forEach((number) => {
  //odecitam 1, protoze indexujeme od 0, pokud to neodectu, je vzdalenost posunuta o 1
  const druhaMocninaVzdalenosti = Math.pow((numbers.length - numbers.indexOf(number)) - 1, 2)
  document.body.innerHTML += `<p><b>Druha mocnina vzdalenosti cisla ${number} od cisla 5:</b> ${druhaMocninaVzdalenosti}</p>`
})

//   Spočítejte, kolik je v seznamu záporných čísel.
document.body.innerHTML += `<p><b>Pocet vsech zapornych cisel:</b> ${zapornaCisla.length}</p>`

//   Spočítejte součet všech čísel v poli.
const soucetVsechCisel = (numbers) => {
  let soucet = 0

  numbers.forEach((number) => {
    soucet += number
  })
  return soucet
}

document.body.innerHTML += `<p><b>Soucet vsech cisel:</b> ${soucetVsechCisel(numbers)}</p>`

//   Spočítejte průměr všech čísel v poli.
const prumer = Math.round(soucetVsechCisel(numbers) / numbers.length)

document.body.innerHTML += `<p><b>Prumer vsech cisel v poli:</b> ${prumer}</p>`

//   Spočítejte součet všech kladných čísel v poli.
const kladnaCisla = numbers.filter((number) => number > 0).map((number) => {
  return number
})

console.log(kladnaCisla)

document.body.innerHTML += `<p><b>Soucet kladnych cisel:</b> ${soucetVsechCisel(kladnaCisla)}</p>`