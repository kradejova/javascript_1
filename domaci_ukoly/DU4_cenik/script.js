const plan1 = document.getElementById("#plan1")
const plan2 = document.getElementById("#plan2")
const plan3 = document.getElementById("#plan3")

const planNumber = 3 //prompt("Zadejte cislo planu (1 - 3): ")

const selectPlan = (planNumber) => {
    const idPlan = "plan" + planNumber
    //console.log(idPlan)
    const elPlan = document.getElementById(idPlan)
    //plan1.classList.toggle("plan--selected")
    plan2.classList.toggle("plan--selected")
    plan3.classList.toggle("plan--selected")
    // console.log(elPlan)
    // if (elPlan === plan1) {
    //     elPlan.classList.toggle("plan--selected")
    //     plan2.classList.toggle("plan--selected")
    //     plan3.classList.toggle("plan--selected")
    // } else if (elPlan === plan2) {
    //     elPlan.classList.toggle("plan--selected")
    //     plan1.classList.remove("plan--selected")
    //     plan3.classList.remove("plan--selected")
    // } else if (elPlan === plan3){
    //     elPlan.classList.toggle("plan--selected")
    //     plan1.classList.remove("plan--selected")
    //     plan2.classList.remove("plan--selected")
    // }
    
    
}

selectPlan(planNumber)