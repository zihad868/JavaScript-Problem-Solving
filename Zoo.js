
function calculateMoney(n){
    janitorCost = 500;
    lunchCost = 8*50

    totalCost = janitorCost + lunchCost;
    
    accessMoney = (n*120) - totalCost

    return accessMoney
}


let sellTicket = calculateMoney(1055)

console.log(sellTicket)