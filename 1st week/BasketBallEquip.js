function basketEquip(input) {
    let annualTax = Number(input[0]);

    let basketShoes = annualTax - 40/100 * annualTax;
    let basketSuit = basketShoes - 20/100 * basketShoes;
    let basketBall = basketSuit * 1/4;
    let basketAccessories = basketBall * 1/5;

    let totalSum = annualTax + basketShoes + basketSuit + basketBall + basketAccessories;
    console.log(totalSum);
}
basketEquip(["365"]);