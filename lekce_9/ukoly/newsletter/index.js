document.querySelector("#newsletter").addEventListener("submit", (e) => {
    e.preventDefault()
    //ulozeni odeslane hodnoty v poli email do promenne
    const email = document.querySelector("#email").value
    //kontrola v konzoli, ze se ulozila spravna hodnota a po odeslani se zobrazi v konzoli
    console.log(`Formular odeslan. Odeslala se nasledujici data: ${email}`)
    //zmena textu na webu obsahujici odeslany email
    document.querySelector("#newsletter").textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email} .`
})