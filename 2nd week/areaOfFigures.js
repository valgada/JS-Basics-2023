function areaOfFigures(input) {
    let figure = input[0];
   
    if(figure === "square") {
        let a = Number(input[1]);
        let areaOfSquare = a * a;
        console.log(areaOfSquare.toFixed(3));
    } else if (figure === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let areaOfRectangle = a * b;
        console.log(areaOfRectangle.toFixed(3));
    } else if (figure === "circle") {
        let radius = Number(input[1]);
        let areaOfCircle = Math.PI * Math.pow(radius,2);
        console.log(areaOfCircle.toFixed(3));
    } else if (figure === "triangle") {
        let a = Number(input[1]);
        let ha = Number(input[2]);
        let areaOfTriangle = (a * ha) / 2
        console.log(areaOfTriangle.toFixed(3));
    }
}
areaOfFigures(["circle",
"6"]);



