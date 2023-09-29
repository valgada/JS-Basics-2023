function lunchBreak(input) {
    let seriesName = input[0];
    let seriesDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchBreakTime = (1 / 8) * breakDuration;
    let timeForRest = (1 / 4) * breakDuration;

    let timeLeft = breakDuration - lunchBreakTime - timeForRest;

    if(timeLeft >= seriesDuration) {
        let timeLeftForWatch = timeLeft - seriesDuration;
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeftForWatch)} minutes free time.`);
    } else {
        let timeNeeded = seriesDuration - timeLeft;
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }
}
lunchBreak(["Teen Wolf",
"48",
"60"]);
