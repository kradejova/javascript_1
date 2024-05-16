const convertToCZK = (castka, mena) => {
    if(mena === "EUR") {
        return Math.round(castka * 24.47)
    } else if (mena === "GBP") {
        return Math.round(castka * 28.09)
    } else if (mena === "USD") {
        return Math.round(castka * 24.81)
    } else  if (mena === "BTC") {
        return (Math.round(castka * 478637))
    } else {
        return null
    }

}

document.body.innerHTML += `<p>${convertToCZK(10, 'EUR')}</p><br>`
document.body.innerHTML += `<p>${convertToCZK(10, 'GBP')}</p><br>`
document.body.innerHTML += `<p>${convertToCZK(10, 'USD')}</p><br>`
document.body.innerHTML += `<p>${convertToCZK(10, 'BTC')}</p><br>`
document.body.innerHTML += `<p>${convertToCZK(10, 'BTCD')}</p>`