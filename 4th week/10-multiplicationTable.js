function multiplication(input) {
    let n = Number(input[0]);

        for(let i = 1; i <=10; i++) {
            let result = i * n;
            console.log(`${i} * ${n} = ${result}`);
        }
}
multiplication(["5"]);