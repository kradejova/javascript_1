//validace emailu pomoci validator.js
//v index.html jako src zadana url knihovny validator.js

//prace s validator.js
const email = "test@test.test"//prompt("Zadej email:")
const elInfo = document.querySelector("#info")
const now = dayjs()


console.log(validator.isEmail(email))

//vypis aktualniho data do console v developerTools
console.log(now.format("MM/DD/YYYY"))
console.log(now.format("DD.MM.YY"))

//validace emailove adresy pomoci validator.js
if (validator.isEmail(email)) {
    elInfo.style.backgroundColor = "green"
    elInfo.textContent = "Spravne zadany email"
} else {
    elInfo.style.backgroundColor = "red"
    elInfo.textContent = "Spatne zadany email"
}