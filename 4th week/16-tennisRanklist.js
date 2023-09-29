function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let initialPoints = Number(input[1]);
    let pointsWon = 0;

    let winsCount = 0;
    
    

    


    for(let i = 2; i < input.length; i++) {
        let result = input[i];

        if(result === "W") {
            winsCount++;
            pointsWon += 2000;
        } else if (result === "F") {
            pointsWon += 1200; 
        } else if (result === "SF") {
            pointsWon += 720;
        }
        
    }

    let totalPoints = initialPoints + pointsWon;
    let averagePoints = pointsWon / tournamentsCount;
    let tournamenstWon = winsCount / tournamentsCount * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${tournamenstWon.toFixed(2)}%`);


}
tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])