//globalni promenna zprava
//const zprava = "Muzes vstoupit"
const vek = 18
const kategorie = "Vino"

const vypisZpravu = (zprava) => {
    if(vek >= 18) {
        //lokalni promenna zprava, ktera zanika v te pravdive vetvi podminky
        document.body.innerHTML = zprava

        if(kategorie === "Vino") {
            //promenna zprava ve vnorene podmince nemusi byt znovu definovana, protoze je vnorena do podminky, kde je definovana
            document.body.innerHTML = zprava
        }
    } else {
        //lokalni promenna zprava, ktera zanika v te nepravdive vetvi podminky
        document.body.innerHTML = zprava
    }
}

vypisZpravu("XYZ")
console.log(zprava)