function worldRecord(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsSwim1M = Number(input[2]);

    let distanceToCover = distanceInMeters * timeInSecondsSwim1M;
    let additionalTime = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTime = distanceToCover + additionalTime;

    if(totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else if(totalTime >= recordInSeconds) {
        let timeNeeded = totalTime - recordInSeconds;
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);
    } 
    
}
worldRecord(["55555.67","3017","5.03"]);