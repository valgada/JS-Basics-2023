// Предпазен найлон - 1.50 лв. за кв. метър
// Боя - 14.50 лв. за литър
// Разредител за боя - 5.00 лв. за литър



function repainting(input) {
    let nylonQty = Number(input[0]);
    let paintQty = Number(input[1]);
    let disolverQty = Number(input[2]);
    let workersHours = Number(input[3]);

    let nylonSum = (nylonQty + 2) * 1.50;
    let paintSum = (paintQty + 10/100 * paintQty) * 14.50;
    let disolverSum = disolverQty * 5;
    let totalSupplySum = nylonSum + paintSum + disolverSum + 0.40;
    let workersTotalSum = (totalSupplySum * 30/100) * workersHours;
    let totalRepaintingSum = totalSupplySum + workersTotalSum;
        console.log(totalRepaintingSum);
    
}
repainting(["10","11","4","8"])