const cisla = [7, 1, 4, 5, 2, 9, 3, 6, 8];
const zvirata = [
  'pes',
  'kočka',
  'králík',
  'had',
  'andulka',
  'morče',
  'krkavec',
];
const napoje = [
  { nazev: 'Pivo', cena: 12, skladem: true },
  { nazev: 'Rum', cena: 120, skladem: false },
  { nazev: 'Víno', cena: 85, skladem: true },
  { nazev: 'Whisky', cena: 450, skladem: true },
  { nazev: 'Vodka', cena: 280, skladem: false },
  { nazev: 'Becherovka', cena: 210, skladem: true },
  { nazev: 'Kofola', cena: 40, skladem: true },
  { nazev: 'Voda', cena: 15, skladem: false },
];

const dvojnasobekCisel = cisla.map((cislo) => {
  return cislo * 2 
})

console.log(cisla)
console.log(dvojnasobekCisel)

const delkaNazvu = zvirata.map((zvire) => {
  return zvire.length
})

console.log(zvirata)
console.log(delkaNazvu)

const nazevNapoju = napoje.map((nazev, hodnota) => {
  //vracim z pole napoje s hodnotou = index konkretni nazev
  return napoje[hodnota].nazev
})

console.log(napoje)
console.log(nazevNapoju)

const napojePouzeSkladem = napoje.map((nazev, hodnota) => {
  if (napoje[hodnota].skladem) {
    return napoje[hodnota].nazev
  }
  return `Neni skladem`
})

console.log(napoje.nazev, napoje.skladem)
console.log(napojePouzeSkladem)

