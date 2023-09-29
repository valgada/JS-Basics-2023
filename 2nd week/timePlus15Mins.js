function timePlusMinutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let additionalTime = 15;

    let totalTime = (hours * 60) + minutes + additionalTime;
    let totalHours = Math.floor(totalTime / 60);
    let totalMinutes = totalTime % 60;
    
    if (totalHours === 24) {
        totalHours = 0
    }
    if (totalMinutes < 10) {
        console.log(`${totalHours}:0${totalMinutes}`)
    } else {
        console.log(`${totalHours}:${totalMinutes}`)
    }

}
timePlusMinutes(["11", "08"]);