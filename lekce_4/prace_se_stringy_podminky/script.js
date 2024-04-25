const jmeno = prompt("Zadej jmeno")

//odstraneni white spaces z obou stran
document.body.innerHTML += "<p>" + jmeno.trim() + "</p>"
//end
document.body.innerHTML += "<p>" + jmeno.trimEnd() + "</p>"
//start
document.body.innerHTML += "<p>" + jmeno.trimStart() + "</p>"

document.body.innerHTML += "<p>" + jmeno.length + "</p>"
document.body.innerHTML += "<p>" + jmeno.toUpperCase() + "</p>"
document.body.innerHTML += "<p>" + jmeno.toLowerCase() + "</p>"

//odseknuti kusu retezce, ve jmene Kaja bude vysledek aja
document.body.innerHTML += "<p>" + jmeno.slice(1,4) + "</p>"
