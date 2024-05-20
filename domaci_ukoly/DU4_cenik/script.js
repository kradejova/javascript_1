
const plan1 = document.getElementById("plan1")
const plan2 = document.getElementById("plan2")
const plan3 = document.getElementById("plan3")

//vybrani planu
const planNumber = prompt("Zadejte cislo planu (1 - 3): ")

//fce, ktera podle zadaneho cisla vybere element, prida mu tridu plan--selected a u ostatnich elementu vypne tridu plan--selected
const selectPlan = (planNumber) => {
     
    //id vybraneho planu
    const idPlan = "plan" + planNumber
    
    //pridani tridy "plan--selected" vybranemu planu
    const elPlan = document.getElementById(idPlan)       
    if (elPlan === plan1) {
        //add je pouzito misto toggle protoze plan1 je defaultne zvoleny jako prvni
        elPlan.classList.add("plan--selected")
        plan2.classList.remove("plan--selected")
        plan3.classList.remove("plan--selected")
    } else if (elPlan === plan2) {
        elPlan.classList.toggle("plan--selected")
        plan1.classList.remove("plan--selected")
        plan3.classList.remove("plan--selected")
    } else if (elPlan === plan3){
        elPlan.classList.toggle("plan--selected")
        plan1.classList.remove("plan--selected")
        plan2.classList.remove("plan--selected")
    }
    
    
}


selectPlan(planNumber)