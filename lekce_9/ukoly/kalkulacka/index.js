const handleDigitClick = (e) => {
    console.log(e)
    e.target.data
    const display = document.querySelector("#display")
    display.textContent = `${display.textContent}${e.target.data}`

}

document.querySelector("#btn-1").addEventListener("click", handleDigitClick)


