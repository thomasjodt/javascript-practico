// Código del cuadrado
function sqrPerimeter(side){
    return `${side*4} cm `;
}
function sqrArea(side){
    return `${Math.pow(side,2)} cm2`;
}

// Código del Triángulo
function trianglePerimeter(side, base, height){
    return `El perímetro del triángulo es: ${side + base + height} cm`;
}
function triangleArea(side, base, height) { 
    return `El área del triángulo es: ${(base*height)/2} cm`;
}


// Código del círculo
function circlePerimeter (radius) {
    return `El perímetro del círculo es: ${(Math.PI*radius*2).toFixed(2)} cm`;
}
function circleArea (radius) {
    return `El área del círculo es: ${(Math.PI*(Math.pow(radius,2))).toFixed(2)} cm`
}

// Interactuación con HTML

let txtAnswer = document.querySelector(".txtAnswer");

function calculateSquarePerimeter () {
    let sqr = document.getElementById("inputSqr");
    let sqrValue = sqr.value;
    let perimeter = sqrPerimeter(sqrValue);
    // alert(perimeter);
    txtAnswer.innerHTML = `<p>El perímetro es:<br> ${perimeter}</p>`;

}

function calculateSquareArea () {
    let sqr = document.getElementById("inputSqr");
    let sqrValue = sqr.value;
    let area = sqrArea(sqrValue);
    // alert(area);
    txtAnswer.innerHTML = `<p>El área es:<br> ${area}</p>`;
}

// Sección de Descuentos

function calculateSalePrice (initialPrice, discount) {
    
    const discountedPrice = (initialPrice*discount)/100;
    const listPrice = initialPrice - discountedPrice;

    return `El precio con descuento es: S/. ${listPrice}`;
}
