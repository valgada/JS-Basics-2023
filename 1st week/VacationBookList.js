function vacationBook(input) {
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysCount = Number(input[2]);

    let totalTimeForBook = pages / pagesPerHour;
    let neededHoursPerDay = totalTimeForBook / daysCount;
    console.log(neededHoursPerDay);
}
vacationBook(["212","20","2"]);