// console.log('Funguju!')

// const karticky = document.querySelectorAll('.karticka')

// karticky[0].classList.remove('otocena')

let otoceneKarty = 0
const karticky = document.querySelectorAll('.karticka')
karticky.forEach((karta) => {
    karta.addEventListener("click", () => {
        karta.classList.toggle("otocena")
        otoceneKarty ++
    })    
})

if (otoceneKarty === 2) {
    setTimeout(() => {
        karticky.disabled = false;
      }, 10000);
}

