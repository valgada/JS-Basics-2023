function suppliesForSchool(input) {
    let penPackages = Number(input[0]);
    let markersPackages = Number(input[1]);
    let liquidLiters = Number(input[2]);
    let discountPercent = Number(input[3]);

    let priceForPens = penPackages * 5.80;
    let priceForMarkers = markersPackages * 7.20;
    let priceForLiquid = liquidLiters * 1.20;
    let totalPrice = priceForPens + priceForMarkers + priceForLiquid;
    let totalPriceWithDisc = totalPrice - (totalPrice * 25 / 100);
    console.log(totalPriceWithDisc);
}
suppliesForSchool(["2","3","4","25"]);