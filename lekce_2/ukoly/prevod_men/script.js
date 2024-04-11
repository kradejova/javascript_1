//Prevod men
let wageInEur = 21.5
let kurz = 24.55
let wageInCzk = Math.round(wageInEur * kurz)

document.body.innerHTML = "<h1>Mzda v korunach: " + wageInCzk + " Kc"
