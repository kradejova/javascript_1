//fce bere id elementu a cislo 0 - 100, ktere zada uzivatel
const updateSkill = (idElement, skillNumber) => {

    //pokud uzivatel zada jine cislo nez v rozsahu 0 - 100, zobrazi se na strance nasledujici text
    if (skillNumber > 100 || skillNumber < 0) {
        return document.body.innerHTML = `
        <p style="text-align: center;"> Jedna ze zadanych hodnot neni v rozsahu 0 - 100</p>
        `
    }

    //vyhledani elementu skill(number) pomoci id
    const slider = document.getElementById(idElement)

    //vyhledani podtridy skill__progress ve tride slider, tj. skill(number)
    const progress = slider.querySelector(".skill__progress")

    //vyhledani podtridy skill__value ve tride slider, tj. skill(number)
    const value = slider.querySelector(".skill__value")

    //vypis do konzole pri debuggovani - overeni, ze prvky jsou nalezene a nevraci se hodnota null
    console.log(slider)
    console.log(progress)
    console.log(value)
    
    //nastaveni zadane hodnoty v posuvniku (width podtridy skill__progress)
    progress.style.width = skillNumber + "%"

    //nastaveni zadane hodnoty v textu (text v podtride skill__value)
    value.textContent = skillNumber + " / 100"

}

//ID jednotlivych elementu
const idHtml = "skill1"
const idCss = "skill2"
const idJavascript = "skill3"

//zadana hodnota HTML
const valueHTML = prompt("Ohodnotte svou uroven znalosti HTML cislem 0 - 100:")

//zadana hodnota CSS
const valueCss = prompt("Ohodnotte svou uroven znalosti CSS cislem 0 - 100:")

//zadana hodnota Javascript
const valueJavascript = prompt("Ohodnotte svou uroven znalosti Javascript cislem 0 - 100:")

//volani funkce s parametry id posuvniku a hodnota zadana uzivatelem
updateSkill(idHtml, valueHTML)
updateSkill(idCss, valueCss)
updateSkill(idJavascript, valueJavascript)