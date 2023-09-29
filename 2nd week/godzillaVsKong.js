function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let pricePerCostume = Number(input[2]);

    let decor = 0.10 * budget;
    let totalCostume = statists * pricePerCostume;

    if(statists > 150) {
        totalCostume = (statists * pricePerCostume) * 0.90;
    }

    let totalExpense = decor + totalCostume;

    if(totalExpense > budget) {
        let moneyNeeded = totalExpense - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);

    } else {
        let moneyLeft = budget - totalExpense;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);

    }
}

godzillaVsKong(["20000",
"120",
"55.5"])
;
