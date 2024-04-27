//jmeno a prijmeni uzivatele, osekana o white spaces a prevedene na mala pismena
const krestniJmeno = prompt("Zadejte krestni jmeno").trim().toLowerCase().replace("ě", "e").replace("š","s").replace("č","c").replace("ř","r").replace("ž","z").replace("ý","y").replace("á","a").replace("í","i").replace("é","e").replace("ú","u").replace("ů","u").replace("ť","t").replace("ď","d").replace("ň","n")
const prijmeni = prompt("Zadejte primeni").trim().toLowerCase().replace("ě", "e").replace("š","s").replace("č","c").replace("ř","r").replace("ž","z").replace("ý","y").replace("á","a").replace("í","i").replace("é","e").replace("ú","u").replace("ů","u").replace("ť","t").replace("ď","d").replace("ň","n")

//cast jmena, cast prijmeni, zbytek emailu
const castJmena = krestniJmeno.slice(0,3)
const castPrijmeni = prijmeni.slice(0,5)
const emailFit = "@fit.vut.cz"

//vygenerovana emailova adresa
document.body.innerHTML += `
    <p><b>Emailova adresa:</b> ${castPrijmeni}${castJmena}${emailFit}</p> 
`
