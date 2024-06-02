//pracuji s materskym formularem reg (id = "reg")
document.querySelector("#reg").addEventListener("submit", (e) => {
    e.preventDefault()
    const firstName = document.querySelector("#firstName").value
    console.log(`Formular odeslan. Odeslala se nasledujici data: ${firstName}`)  //pokud pouziju pouze console.log bez preventDefault, tak se v konzoli se akce projevi, ale stranka se nacte znovu
    //alert("formular odeslan")
})