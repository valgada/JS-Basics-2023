function maxNumber(input) {
    let maxNumber = -99999999999999999;
    let index = 0;
    let currentNumber = input[index];

    while (currentNumber !== "Stop") {
        let numberAsNumber = Number(currentNumber);

        if (numberAsNumber > maxNumber) {
            maxNumber = numberAsNumber;
        }

        index++;
        currentNumber = input[index];
    }

    console.log(maxNumber);
}
maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])