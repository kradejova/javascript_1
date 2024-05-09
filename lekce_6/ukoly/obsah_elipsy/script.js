const sirka = 2
const vyska = 2
const pi = Math.PI

ellipseArea = (vyska, sirka, pi) => {
    return (0.5 * vyska) * (0.5 * sirka) * pi
}

document.body.innerHTML += `Plocha pozemku je ${ellipseArea(vyska, sirka, pi)}`