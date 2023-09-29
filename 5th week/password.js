function sumNumbers(input) {
   let goalNumber = Number(input[0]);
   let index = 1;
   let curNum = Number(input[index]);
   let totalSum = 0;

   while (curNum <= goalNumber) {
        totalSum += curNum
        
        if(totalSum <= goalNumber) {
            console.log(totalSum);
        }
        
        index++
        curNum = input[index];
       
        

   }

console.log(totalSum);

}
sumNumbers(["100", "10", "20", "30", "40"])