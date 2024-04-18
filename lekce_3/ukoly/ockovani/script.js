//ockovani - formular, ktery bere jmeno a vek uzivatele

const jmeno = prompt("Zadejte jmeno: ")
const vek = Number(prompt("Zadejte vek: "))

//document.body.innerHTML = "<p>" + jmeno + ", věk: " + vek

const person = {
    name: jmeno,
    age: vek,
    jazyk: window.navigator.language
}

document.body.innerHTML += "<p>Vase jmeno: " + person.name + "</p>"
document.body.innerHTML += "<p>Vas vek: " + person.age + "</p>"
document.body.innerHTML += "<p>Jazyk: " + person.jazyk + "</p>" 