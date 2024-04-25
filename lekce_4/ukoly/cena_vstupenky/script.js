const vek = Number(prompt("Zadejte vek"))
let plnaCena = 12

if (vek < 6) {
    plnaCena = 0
} else if (vek <= 26){
    plnaCena  *= 0.65
} else if ( vek <= 64) {
    plnaCena = plnaCena
} else {
    plnaCena *= 0.5
}

document.body.innerHTML += `<p>Cena vstupenky je ${Math.round(plnaCena)} Kc</p>`

