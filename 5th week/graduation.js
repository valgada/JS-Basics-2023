function graduation(input) {
    let name = input[0];
    let grade = 1;
    let curGrade = Number(input[grade]);
    let gradeSum = 0;
    let excluded = 0;


     while (grade <= 12) {            

            if(curGrade < 4) {
                excluded++;
            }
            if(excluded > 1) {
                console.log(`${name} has been excluded at ${grade - 1} grade`);break;
            }
        
            gradeSum += curGrade;
            grade++
            curGrade = Number(input[grade]);

          


        }

    let avgGrade = gradeSum / 12

    if(excluded < 2) {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
         

}
graduation(["Gosho",

"5",

"5.5",

"6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])