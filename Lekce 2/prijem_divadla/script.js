//Prijem divadla

let listek = 12
let navstevnici = 174
let predstaveni = 15

//vypocet prijmu bez studentu
let prijem = listek * navstevnici * predstaveni

document.body.innerHTML = "Prijem divadla bez studentu: " + prijem + " Kc"

//sleva 65% ceny listku
let studentskaSleva = 0.65 * listek

//cena studentskeho listku se slevou
let studentskyListek = listek - studentskaSleva

//vypocet poctu studentu, kde pocet studentu tvori 40% vsech navstevniku, zaokrouhleno nahoru, protoze vysledek 0.4 * 174 = 69.6
let studenti = Math.ceil(0.4 * navstevnici)

//vypocet nestudentu
let navstevniciBezStudentu = navstevnici - studenti

//overeni, ze je vypocet lidi stejny, tj. se rovna promenne navstevnici
//let navstevniciStudentiNestudenti = navstevniciBezStudentu + studenti
//document.body.innerHTML += "<br>Pocet navstevniku (studenti a nestudenti): " + navstevniciStudentiNestudenti + " osob"

//vypocet celkoveho prijmu za mesic, kde je 40% studentu
let prijemSeStudenty = ((studentskyListek * studenti) + (listek * navstevniciBezStudentu)) * predstaveni

document.body.innerHTML += "<br>Prijem divadla se studenty: " + prijemSeStudenty + " Kc"

//overeni jednotlivych cen listku za mesicni predstaveni jednotlive pro studenty a pro nestudenty
//let prijemStudenti = studentskyListek * studenti * predstaveni
//let prijemNestudenti = listek * navstevniciBezStudentu * predstaveni
//document.body.innerHTML += "<br>Prijem divadla se studenty - overeni: " + (prijemStudenti + prijemNestudenti) + " Kc"




