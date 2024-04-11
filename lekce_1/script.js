//Lekce 1
//script.js precte i html tagy
document.body.innerHTML =  "<h1>Cviceni z lekci</h1>"
//document.body.innerHTML += "<h2>Muj prvni web</h2>"

//prace s ciselnymi hodnotami, aritmeticke operatory
//document.body.innerHTML += 10 % 3

//spojovani stringu
//document.body.innerHTML += "<p>Jmenuji se " + "Kaja</p>"

//funkce
//document.body.innerHTML += "<p>Zaokrouhlene cislo: " + Math.round(4.2) + "</p>"

//vlozene funkce do sebe
//document.body.innerHTML += "<p>" + Math.round(Math.random() * 10) + "</p>"

//ukoly - viz prvni lekce na githubu, zadani
document.body.innerHTML += "<h2>Lekce 1</h2>"
//vyplata
document.body.innerHTML += "<h2>Ukol 1: Vyplata</h2>"
document.body.innerHTML += "<p>" + "<b>Mesicni prijem: </b>" + 7 * 320 * 21 + " Kc</p>"
document.body.innerHTML += "<p>" + "<b>Dan z prijmu (zivnostensky list): </b>" + Math.floor(((7 * 320 * 21) - ((7 * 320 * 21) * 0.6)) * 0.15) + " Kc" + "</p>"

//film
document.body.innerHTML += "<h2>Ukol 2: Film</h2>"
document.body.innerHTML += "<p>" + "<b>Delka filmu v minutach:</b> 223 minut</p>"
document.body.innerHTML += "<p>" + "<b>Delka filmu v hodinach a minutach: </b>" + Math.floor(223/60) + " " + "h" + " " + 223 % 60 + " " + "min" + "</p>"

//email
document.body.innerHTML += "<h2>Ukol 3: Email</h2>"
document.body.innerHTML += "<p>" + "<b>Email: </b>" + "karolina" + "." + "radejova" + "@mujmail.com" + "</p>"

//Nahodna cisla
document.body.innerHTML += "<h2>Ukol 5: Nahodna cisla</h2>"
document.body.innerHTML += "<p><b>Nahodne cislo: </b>"+ Math.random() * 10 + "</p>"

document.body.innerHTML += "<h2>Lekce 2</h2>"




