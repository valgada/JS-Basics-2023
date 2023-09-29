function numsDevideBy9(first, second) {
    let start = first;
    let ceil = second;
    let sum = 0;
    let output = "";

    for (let a = start; a <= ceil; a++) {

        if (a % 9 === 0) {
           sum = sum + a;
           
            
            
        }
    }
     
    console.log(sum);
    

}
numsDevideBy9(100, 200);