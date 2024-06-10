//vrati prvni prvek z pole
const first = (pole) => {
    return pole[0]
}

//otestovani fce
console.log(first([3, 2, 1])); // ⟶ 3
console.log(first([])); // ⟶ undefined

//vrati posledni prvek z pole
const last = (pole) => {
    return pole[pole.length -1]
}
//otestovani fce
console.log(last([3, 2, 1])); // ⟶ 1
console.log(last([])); // ⟶ undefined

//vrati prvek uprostred pole
const middleMean = (pole) => {
    if (pole.length%2 === 0) {
        return (pole[pole.length/2] + pole[pole.length/2 - 1])/2
    } else if (pole.length%2 !== 0) {  
    return pole[Math.floor(pole.length/2)]
    } else {
        return undefined
        //vrati automaticky undefined, kdyz to zustane prazdne
    }
}

//otestovani fce
console.log(middleMean([3, 2, 1])); // ⟶ 2
console.log(middleMean([3, 2, 1, 0])); // ⟶ 1.5
console.log(middleMean([])); // ⟶ undefined

const insert = (pole, hodnota) => {
    if (pole.includes(hodnota)) {
        return false
    } else {
        pole.push(hodnota)
        console.log(pole)
        return true
    }
}

console.log(insert([3, 2, 1], 4)); // ⟶ true
console.log(insert([3, 2, 1], 3)); // ⟶ false