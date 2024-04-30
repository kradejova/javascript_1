//jmeno a prijmeni uzivatele, osekana o white spaces a prevedene na mala pismena
const krestniJmeno = prompt("Zadejte krestni jmeno (bez diakritiky):").trim().toLowerCase()
const prijmeni = prompt("Zadejte primeni (bez diakritiky:").trim().toLowerCase()


//cast jmena, cast prijmeni, zbytek emailu
const castJmena = krestniJmeno.slice(0,3)
const castPrijmeni = prijmeni.slice(0,5)
const emailFit = "@fit.vut.cz"

//vygenerovana emailova adresa
document.body.innerHTML += `
    <p><b>Emailova adresa:</b> ${castPrijmeni}${castJmena}${emailFit}</p> 
`
