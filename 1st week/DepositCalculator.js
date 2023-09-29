function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let depositTime = Number(input[1]);
    let annIntRate = Number(input[2]);
    
    let generatedInt = depositSum * annIntRate / 100;
    let intForMonth = generatedInt / 12;
    let totalSum = depositSum + depositTime * intForMonth;
    console.log(totalSum);
}
depositCalculator(["200","3","5.7"])