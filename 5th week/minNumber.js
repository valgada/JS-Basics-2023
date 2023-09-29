function minNumber(input) {
    let minNumber = 99999999999999999;
    let index = 0;
    let currentNumber = input[index];

    while (currentNumber !== "Stop") {
        let numberAsNumber = Number(currentNumber);

        if (numberAsNumber < minNumber) {
            minNumber = numberAsNumber;
        }

        index++;
        currentNumber = input[index];
    }

    console.log(minNumber);
}
minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])