const ulice = prompt("Zadejte ulici")
const cisloDomu = prompt("Zadejte cislo domu")
const mesto = prompt("Zadejte mesto")
const psc = prompt("Zadejte PSC")

document.body.innerHTML += `
    <address>
        <p>${ulice + " " + cisloDomu}</p>
        <p>${psc + " " + mesto}</p>
    </address>
`