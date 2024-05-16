//definovani fci
const goodbye = (jmeno) => {
    const elClosing = document.querySelector(".email__closing")
    // elClosing.textContent = "Na shledanou"
    elClosing.textContent = "S pozdravem " + jmeno

}

const fillSubject = (subject) => {
    const elSubject = document.querySelector(".email__subject")
    elSubject.textContent = subject
}

const fillBody = (body, name) => {
    const elBody = document.querySelector(".email__body")
    elBody.textContent = body
    goodbye(name)
}


//volani fci
fillSubject("Pracovni nabidka QA")
fillBody("lorem ipsum lorem ipsum lorem ipsum lorem ipsum lkajsd", "John Doe")
