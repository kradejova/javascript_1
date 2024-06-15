//rozbaleni/zabaleni hamburger menu v mobilnim zobrazeni stranky
document.querySelector("#menu-tlacitko").addEventListener("click", () => {
    //rozbaleni polozek v hamburger menu
    document.querySelector("#menu-polozky").classList.toggle("show")

    //prepinani ikon hamburger menu a krizku
    const hamburgerMenu = "fa-bars"
    const iconX = "fa-xmark"
    document.querySelector("#menu-tlacitko i").classList.toggle(iconX)
    document.querySelector("#menu-tlacitko i").classList.toggle(hamburgerMenu)
})