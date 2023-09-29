function cinema(input) {
    let typeOfProjection = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    let income = 0;

    if (typeOfProjection === "Premiere") {
        income = rows * cols * 12;
        
    } else if (typeOfProjection === "Normal") {
        income = rows * cols * 7.50;
        
    } else if (typeOfProjection === "Discount") {
        income = rows * cols * 5;
        
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Discount",
"12",
"30"]);