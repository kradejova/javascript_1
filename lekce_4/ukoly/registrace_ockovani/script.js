//ockovani - formular, ktery bere jmeno, vek a heslo uzivatele

const jmeno = prompt("Zadejte jmeno: ")
const vek = Number(prompt("Zadejte vek: "))
const heslo = prompt("Zadejte heslo")

if (vek >= 65) {
    document.body.innerHTML += `<p>vek je v poradku</p>`
    if (heslo.length <= 8) {
        document.body.innerHTML += `<p>slabe heslo</p>`
    }
} else {
    document.body.innerHTML += `<p>nizky vek</p>`
}


