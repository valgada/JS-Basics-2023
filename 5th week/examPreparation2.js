function examPreparation(input) {
    let index = 0;
    let maxBadGrades = Number(input[index]);
    index++;

    let problemName = input[index];
    index++ 

    let problemGrade = Number(input[index]);
    index++;

    let lastProblem = '';
    let badGrades = 0;
    let badGradesReached = false;
    let sumGrades = 0;
    let gradesCount = 0;



    while(problemName !== "Enough") {
        lastProblem = problemName;

        if(problemGrade <= 4) {
            badGrades++;
        }

        if(badGrades === maxBadGrades) {
            badGradesReached = true;
            break;
        }

        sumGrades += problemGrade;
        gradesCount++;

        problemName = input[index]
        index++

        problemGrade = Number(input[index]);
        index++
    }

    if(badGradesReached) {
        console.log(`You need a break, ${badGrades} poor grades.`);
    } else {
        let avgGrade = sumGrades / gradesCount;
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradesCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }



}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])