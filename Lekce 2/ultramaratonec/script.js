//Ultramaraton
let start = 15
let delka = 4
let konec = (start + delka)

if (konec > 24) {
    konec = (start + delka) - 24
    
} else {
    konec = (start + delka)
}

document.body.innerHTML = "Konec zavodu: " + konec + ":00 hodin"