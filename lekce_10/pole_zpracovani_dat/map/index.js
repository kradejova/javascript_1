const jmena = ["jana", "karel", "jakub"]

//nevraci pole
jmena.forEach((jmeno) => {
    console.log(`${jmeno}@czechitas.cz`)
}
)

//map vytvari nove pole
const emails = jmena.map((jmeno) => {
    return `${jmeno}@czechitas.cz`
}

)