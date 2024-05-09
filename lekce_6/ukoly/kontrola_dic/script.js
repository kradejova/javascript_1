const platneDIC = "CZ123456789"
const platneDIC2 = "CZ1234567890"
const neplatneDIC1 = "123"
const neplatneDIC2 = "CZ"
const neplatneDIC3 = "1234567890"
const neplatneDIC4 = "001234567890"
const neplatneDIC5 = "1234567890CZ"
const neplatneDIC6 = "CZ12345678901"
const neplatneDIC7 = "CZ12345678"
const neplatneDIC8 = "CZA12345678"


const isDIC = (inputStr) => {
    if (inputStr.length < 11){
        return false
    }  
    
    if (inputStr.length > 12) {
        return false
    }
    
    const prefix = inputStr.slice(0,2)
    if (prefix !== "CZ") {
        return false
    }

    const digits = inputStr.slice(2, inputStr.length)

    if (validator.isInt(digits) === false) {
        return false
    }

    return true    
}

document.body.innerHTML += `
<p> Validace DIC: <br>
<b>DIC</b>: ${platneDIC}, <b>platnost</b>: ${isDIC(platneDIC)}<br>
<b>DIC</b>: ${platneDIC2}, <b>platnost</b>: ${isDIC(platneDIC2)}<br>
<b>DIC</b>: ${neplatneDIC1}, <b>platnost</b>: ${isDIC(neplatneDIC1)}<br>
<b>DIC</b>: ${neplatneDIC2}, <b>platnost</b>: ${isDIC(neplatneDIC2)}<br>
<b>DIC</b>: ${neplatneDIC3}, <b>platnost</b>: ${isDIC(neplatneDIC3)}<br>
<b>DIC</b>: ${neplatneDIC4}, <b>platnost</b>: ${isDIC(neplatneDIC4)}<br>
<b>DIC</b>: ${neplatneDIC5}, <b>platnost</b>: ${isDIC(neplatneDIC5)}<br>
<b>DIC</b>: ${neplatneDIC6}, <b>platnost</b>: ${isDIC(neplatneDIC6)}<br>
<b>DIC</b>: ${neplatneDIC7}, <b>platnost</b>: ${isDIC(neplatneDIC7)}<br>
<b>DIC</b>: ${neplatneDIC8}, <b>platnost</b>: ${isDIC(neplatneDIC8)}<br>
`

