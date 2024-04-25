//vstup = jmeno.prijmeni@domena

const email = prompt("Zadejte email")

const atIndex = email.indexOf("@")
const uzivatelskeJmeno = email.slice(0, atIndex)
const domena = email.slice(atIndex + 1, email.length)

const parsedEmail = {
    userName: uzivatelskeJmeno,
    domain: domena
}

document.body.innerHTML += `
    <p>${parsedEmail.userName}</p>
    <p>${parsedEmail.domain}</p>
`