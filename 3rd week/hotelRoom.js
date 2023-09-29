function hotelRoom(input) {
    let month = input[0];
    let nightsCount = Number(input[1]);

    let totalPrice = 0;
    let apartmentType = '';
    let pricePerNight = 0;

    if (apartmentType === "Studio") {
        switch (month) {
            case "May":
            case "October":
                pricePerNight = 50;totalPrice = nightsCount * pricePerNight;
                 break;
                
            case "June":
            case "September":
                pricePerNight = 75.20;totalPrice = nightsCount * pricePerNight;
                 break;
            case "July":
            case "August":
                pricePerNight = 76;totalPrice = nightsCount * pricePerNight;
                 break;
        }
    } else if (apartmentType === "Apartment") {
        switch (month) {
            case "May":
            case "October":
                pricePerNight = 65; break;
            case "June":
            case "September":
                pricePerNight = 68.70; break;
            case "July":
            case "August":
                pricePerNight = 77; break;
        }
    }
       
    totalPrice = nightsCount * pricePerNight;

    if (apartmentType === "Studio" && month === "May" && month === "October") {
        if (nightsCount > 7) {
            totalPrice *= 0.95;
        } else if (nightsCount > 14) {
            totalPrice *= 0.70;
        } else if (nightsCount > 14 && month === "June" && month === "Septeber") {
            totalPrice *= 0.80;
        }
    } else if (apartmentType === "Apartment" && nightsCount > 14) {
        totalPrice *= 0.90;
    }

    console.log(`Apartment: ${totalPrice} lv.`);
    console.log(`Studio: ${totalPrice} lv.`);

}

hotelRoom(["May", "15"]);