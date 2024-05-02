//ukol https://github.com/aellopos/DK-JavaScript-1-duben-cerven-2024/blob/main/solution/lekce-05.md

const bodyElement = document.querySelector("body")
const newsElement = document.querySelector(".news")
const h1Element = document.querySelector("h1")
const zprava1Element = document.getElementById("zprava1")
const obrazekZpr3Element = document.querySelector("#zprava3 img")
//1
bodyElement.style.backgroundColor = "#e9e9e9"

//2
newsElement.style.backgroundColor = "white"

newsElement.style.maxWidth = "60rem"

//3
h1Element.classList.add('news__title')
h1Element.textContent = "Aktuální novinky"

//4
zprava1Element.classList.add('post--main')

//5
obrazekZpr3Element.src = "images/zprava3-novy.jpg"

