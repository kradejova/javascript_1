//rozbaleni/zabaleni hamburger menu v mobilnim zobrazeni stranky
document.querySelector("#menu-tlacitko").addEventListener("click", () => {
    document.querySelector("#menu-polozky").classList.toggle("show")
})