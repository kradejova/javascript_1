
const clicked = (e) => {
    console.log(e)
    e.target.classList.toggle("btn-smiley--selected") //jiny zpusob, jak napsat toto: document.querySelector("#smiley2").classList.toggle("btn-smiley--selected"), ale funguje to se vsemi smajliky
}

document.querySelector("#smiley1").addEventListener("click", clicked)

document.querySelector("#smiley2").addEventListener("click", clicked)

document.querySelector("#smiley3").addEventListener("click", clicked)

document.querySelector("#smiley4").addEventListener("click", clicked)

document.querySelector("#smiley5").addEventListener("click", clicked)
