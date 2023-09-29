function sumOfNums(input) {
    let numberAsString = input.toString();
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        let currentNumber = Number(numberAsString[i]);
        sum = sum + currentNumber;
               
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNums([1234]);