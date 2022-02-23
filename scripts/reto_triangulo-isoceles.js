function triangle(side1, side2,) {
    let base = (side1)*(Math.sqrt(2));

    if (side1 == side2 && side1) {
        console.log("Es un triángulo isóceles");
        return `La base del triángulo es: ${base.toFixed(2)} cm y su altura es: ${(base/2).toFixed(2)} cm`
    }
    else {
        return "No es un triángulo isóceles.";
    }
}