function shopping(input) {
    let petersBudget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramMemoryCount = Number(input[3]);
    
    let videoCardsPrice = videoCardsCount * 250;
    let processorsPrice = (0.35 * videoCardsPrice) * processorsCount;
    let ramMemoryPrice = (0.10 * videoCardsPrice) * ramMemoryCount;

    let totalPurchase = videoCardsPrice + processorsPrice + ramMemoryPrice;

    if(videoCardsCount > processorsCount) {
        totalPurchase = 0.85 * totalPurchase;
    }

    if(petersBudget >= totalPurchase) {
        let moneyLeft = petersBudget - totalPurchase
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalPurchase - petersBudget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
}
shopping(["920.45",
"3",
"1",
"1"]);