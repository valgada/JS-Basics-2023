function yardGreening(input) {
    let yardSize = input[0];
    console.log("The final price is:", (yardSize * 7.61) - (0.18 * (yardSize * 7.61)), "lv.");
    console.log("The discount is:", (0.18 * (yardSize * 7.61)), "lv.");
  
}
yardGreening([650])