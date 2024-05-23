const elButton = document.querySelector("#button-order")

const objednat = () => {
    elButton.textContent = "Objednat"
    elButton.removeAttribute("disabled")    
}

setTimeout(objednat, 8000)

