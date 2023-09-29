function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalSales = puzzleCount * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
    let totalToys = puzzleCount + dolls + bears + minions + trucks;

    if (totalToys >= 50) {
        totalSales = 0.75 * totalSales;
    }

        totalSales = 0.90 * totalSales;
    
    if (totalSales >= tripPrice) {
        let moneyLeft = totalSales - tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        let moneyNeeded = tripPrice - totalSales;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }
}
toyShop(["320","8","2","5","5","1"]);
