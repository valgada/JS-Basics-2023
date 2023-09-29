function numFrom100To200(input){
    let speed = Number(input[0]);
        
    if (speed <= 10) {
        console.log("slow");
    } else if (speed > 1000){
        console.log("extremely fast");
    } else if (150 < speed <= 1000){
        console.log("ultra fast");
    } else if ( 50 < speed <= 150){
        console.log("fast");
    } else if ( 10 < speed <= 50){
        console.log("average");
    }
}

numFrom100To200(["49.5"]);