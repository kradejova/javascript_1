//fce podle delky zadaneho stringu a zadane delky udela akci podle zadanych podminek
const fillcut = (str, len) => {
    if (str.length > len) {
        return str.slice(0, len)
    } else if (str.length < len) {
        return str.padStart(len, ".")
    } else {
        return str
    }
}

document.body.innerHTML += fillcut('petr', 8) + '<br>'; // vypíše „....petr“
document.body.innerHTML += fillcut('petr', 3) + '<br>'; // vypíše „pet“
document.body.innerHTML += fillcut('petr', 4) + '<br>'; // vypíše „petr“