//prace s formularem, jak ukladat zadanou hodnotu do promenne a overit si v konzoli, ze se odeslala a ulozila do promenne
//pracuji s materskym formularem reg (id = "reg")
// document.querySelector("#reg").addEventListener("submit", (e) => {
//     e.preventDefault()
//     const firstName = document.querySelector("#firstName").value
//     //console.log(`Formular odeslan. Odeslala se nasledujici data: ${firstName}`)  //pokud pouziju pouze console.log bez preventDefault, tak se v konzoli se akce projevi, ale stranka se nacte znovu
//     //alert("formular odeslan")
// })


//vypocet mzdy ze zadanych hodnot, ktery se zobrazuje na strance pod formularem  
// document.querySelector("#reg").addEventListener("submit", (e) => {
//     e.preventDefault()
//     const firstName = document.querySelector("#firstName").value
    
//     //prevadim text na cislo pomoci fce Number, protoze hours je po zadani hodnoty string!
//     const salary = Number(document.querySelector("#hours").value) * 500

//     //#info je paragraf, proto ze na strance prepise pouze obsah paragrafu
//     document.querySelector("#info").textContent = `Na zaklade informaci si zamestnanec ${firstName} vydelal ${salary} Kc.`
// })

//slozitejsi formulare
document.querySelector("#reg").addEventListener("submit", (e) => {
    e.preventDefault()
    const firstName = document.querySelector("#firstName").value
    
    //prevadim text na cislo pomoci fce Number, protoze hours je po zadani hodnoty string!
    let salary = Number(document.querySelector("#hours").value) * 500
    
    //chytam cely select, do value se propisuje, co je vybrane z options (nechytejme jednotlive options)
    const partnership = document.querySelector("#partnership").value

    if (partnership === "os") {
        salary = Number(document.querySelector("#hours").value) * 700
    }
    //#info je paragraf, proto ze na strance prepise pouze obsah paragrafu
    document.querySelector("#info").textContent = `Na zaklade informaci si zamestnanec ${firstName} vydelal ${salary} Kc.`
})

//event input reaguje na jednotliva zadani do elementu
document.querySelector("#password").addEventListener("input", (e) => {
    if(Number(e.target.value.length) < 16) {
        console.log(`Nedostatecna delka hesla. Tve heslo ma ${Number(e.target.value.length)} znaku, musis jeste zadat ${16 - Number(e.target.value.length)} znaku`)
    } else {
        console.log("Heslo je dostatecne dlouhe")
    }
    //console.log(e.target.value)
})

//change nereaguje na kazde pridani hodnoty, ale na zmenu