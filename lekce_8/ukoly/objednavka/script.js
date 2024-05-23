const elButton = document.querySelector("#button-order")

elButton.addEventListener("click", () => {
    //paragraf Objednano se po kliknuti zobrazi na strance misto tlacitka
    //document.body.innerHTML = `<p>Objednano</p>`

    //zmena textu na tlacitku
    elButton.textContent = "Objednano"
})