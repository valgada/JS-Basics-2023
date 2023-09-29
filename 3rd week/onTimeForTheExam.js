function onTime(input) {
    let examTimeHour = Number(input[0]);
    let examTimeMin = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minuteOfArrival = Number(input[3]);

    if (examTimeHour === hourOfArrival && examTimeMin < minuteOfArrival) {
        console.log("Late");
        console.log(minuteOfArrival - examTimeMin);
    } else if (examTimeHour < hourOfArrival) {
        console.log("Late");
        console.log((hourOfArrival - examTimeHour)":"() );
    }
}
onTime(["9","30","9","50"]);