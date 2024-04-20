//prevod poctu stupnu Fahrnheita, ktere vlozi uzivatel, na stupne Celsia (vzorecek z ceske Wikipedie)

const stupneFahrnheit = Number(prompt("Zadejte pocet stupnu Fahrnheita: "))
const stupneCelsius = (5 * (stupneFahrnheit - 32) / 9).toFixed(2)

//document.body.innerHTML = "<p>" + stupneFahrnheit + " stupnu Fahrnheita se rovna " + stupneCelsius + " stupnum Celsia."
document.body.innerHTML = "<p><b>Fahrnheit: </b>" +  stupneFahrnheit + " °F</p>"
document.body.innerHTML += "<p><b>Celsius: </b>" + stupneCelsius + " °C"
