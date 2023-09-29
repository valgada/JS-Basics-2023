function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    
    let destination = '';
    let place = '';
    let totalPrice = 0;

    if (budget <= 100) {
        switch (season) {
            case "summer":
                totalPrice = budget * 0.30;
                destination = "Bulgaria";
                place = "Camp";
                break;
            case "winter":
                totalPrice = budget * 0.70;
                destination = "Bulgaria";
                place = "Hotel";break;
        }
    } else if (budget <= 1000) {
        switch (season) {
            case "summer":
                totalPrice = budget * 0.40;
                destination = "Balkans";
                place = "Camp";break;
            case "winter":
                totalPrice = budget * 0.80;
                destination = "Balkans";
                place = "Hotel";break;
        }
    } else {
        destination = "Europe";
        totalPrice = budget * 0.90;
        place = "Hotel";
    }



    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${totalPrice.toFixed(2)}`);

}
journey(["1500", "summer"])

;