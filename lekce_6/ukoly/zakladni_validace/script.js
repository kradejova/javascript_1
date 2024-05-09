const email = "k.radejova@gmail.com"
const platebniKarta = "4125010001000208"

console.log(validator.isEmail(email))
console.log(validator.isCreditCard(platebniKarta))

const userEmail = prompt("Zadejte email:")
const msg = document.getElementById("msg")

if (validator.isEmail(userEmail)) {
    msg.textContent = "Email v poradku"
    msg.classList.add("msg--valid")

} else {
    msg.textContent = "Neplatny email"
    msg.classList.add("msg--invalid")
}
