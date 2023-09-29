function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let price = 0
    switch (city) {
        case "Sofia":
            if (product === "coffee") {
                price = 0.50;
                result = quantity * price;
                console.log(result.toFixed(2)); break;
            } else if (product === "water") {
                price = 0.80;
                result = quantity * price;
                console.log(result.toFixed(2)); break;
            } else if (product === "beer") {
                price = 1.20;
                result = quantity * price;
                console.log(result.toFixed(2)); break;
            } else if (product === "sweets") {
                price = 1.45;
                result = quantity * price;
                console.log(result.toFixed(2)); break;
            } else if (product === "peanuts") {
                price = 1.60;
                result = quantity * price;
                console.log(result.toFixed(2)); break;
            }
        case "Plovdiv":
            if (product === "coffee") {
                price = 0.40;
                result = quantity * price;
                console.log(result.toFixed(2)); break;
            } else if (product === "water") {
                price = 0.70;
                result = quantity * price;
                console.log(result.toFixed(2)); break;
            } else if (product === "beer") {
                price = 1.15;
                result = quantity * price;
                console.log(result.toFixed(2)); break;
            } else if (product === "sweets") {
                price = 1.30;
                result = quantity * price;
                console.log(result.toFixed(2)); break;
            } else if (product === "peanuts") {
                price = 1.50;
                result = quantity * price;
                console.log(result.toFixed(2)); break;
            }
        case "Varna":
            if (product === "coffee") {
                price = 0.45;
                result = quantity * price;
                console.log(result.toFixed(2)); break;
            } else if (product === "water") {
                price = 0.70;
                result = quantity * price;
                console.log(result.toFixed(2)); break;
            } else if (product === "beer") {
                price = 1.10;
                result = quantity * price;
                console.log(result.toFixed(2)); break;
            } else if (product === "sweets") {
                price = 1.35;
                result = quantity * price;
                console.log(result.toFixed(2)); break;
            } else if (product === "peanuts") {
                price = 1.55;
                result = quantity * price;
                console.log(result.toFixed(2)); break;
            }
    }
}
smallShop(["water",
    "Plovdiv",
    "3"]);