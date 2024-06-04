document.querySelector("#newsletter").addEventListener("submit", (e) => {
    e.preventDefault()
    //ulozeni odeslane hodnoty v poli email do promenne
    const email = document.querySelector("#email").value

    //kontrola v konzoli, ze se ulozila spravna hodnota a po odeslani se zobrazi v konzoli
    console.log(`Formular odeslan. Odeslala se nasledujici data: ${email}`)

    //zmena textu na webu obsahujici odeslany email
    document.querySelector("#newsletter").textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email} .`
})

//event navazany na input v textovem poli pro email
document.querySelector("#email").addEventListener("input", (e) => {
    //zobrazeni cerveneho ramecku pro prazdne textove pole
    if (e.target.value.length === 0) {
        e.target.classList.toggle("red-border")
    //po pridani kontroly na zavinac je toto asi zbytecne
    } else if (e.target.value.length > 0) {
        e.target.classList.remove("red-border")
    }
    //zobrazeni cerveneho ramecku pro adresu bez @
    e.target.value.includes('@') ? e.target.classList.remove("red-border") : e.target.classList.toggle("red-border")
})