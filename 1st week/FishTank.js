function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let aquaVolume = lenght * width * height;
    let litersVolume = aquaVolume * 0.001;
    let neededVolume = litersVolume * (1 - percent / 100);
    console.log(neededVolume);
}
fishTank(["85","75","47","17"]);