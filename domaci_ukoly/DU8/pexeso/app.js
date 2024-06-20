// console.log('Funguju!')

// const karticky = document.querySelectorAll('.karticka')

// karticky[0].classList.remove('otocena')

let otoceneKarty = 0
const karticky = document.querySelectorAll('.karticka')
karticky.forEach((karta) => {
    karta.addEventListener("click", () => {
        otoceneKarty++
        karta.classList.toggle("otocena")
        if (otoceneKarty === 2) {
            document.querySelectorAll(".karticka")
        }
    })    
})

if (otoceneKarty === 2) {
    setTimeout(() => {
        karticky.disabled = false;
      }, 10000);
}

