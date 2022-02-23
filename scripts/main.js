// Código del cuadrado
function sqrPerimeter(side){
    return `${side*4} cm `;
}
function sqrArea(side){
    return `${Math.pow(side,2)} cm2`;
}

// Código del Triángulo
function trianglePerimeter(side, base, height){
    return `${side + base + height} cm`;
}
function triangleArea(side, base, height) { 
    return `${(base*height)/2} cm`;
}


// Código del círculo
function circlePerimeter (radius) {
    return `${(Math.PI*radius*2).toFixed(2)} cm`;
}
function circleArea (radius) {
    return `${(Math.PI*(Math.pow(radius,2))).toFixed(2)} cm2`
}

// Interactuación con HTML

let txtSqrAnswer = document.getElementById("sqrAnswer"); // Cuadrado

function calculateSquarePerimeter () {
    let sqr = document.getElementById("inputSqr");
    let sqrValue = sqr.value;
    let perimeter = sqrPerimeter(sqrValue);
    // alert(perimeter);
    txtSqrAnswer.innerHTML = `<p>El perímetro es:<br> ${perimeter}</p>`;

}

function calculateSquareArea () {
    let sqr = document.getElementById("inputSqr");
    let sqrValue = sqr.value;
    let area = sqrArea(sqrValue);
    // alert(area);
    txtSqrAnswer.innerHTML = `<p>El área es:<br> ${area}</p>`;
}

let txtTriangleAnswer = document.getElementById("triangleAnswer"); // Triángulo

function calculateTrianglePerimeter () {
    let height = document.getElementById("inputHeight");
    let heightValue = Number(height.value);


    let base = document.getElementById("inputBase");
    let baseValue = Number(base.value);

    let side3 = Math.sqrt((baseValue**2) + (heightValue**2));

    let perimeter = trianglePerimeter(side3, baseValue, heightValue);
    
    txtTriangleAnswer.innerHTML = `<p>El perímetro es: <br> ${perimeter}</p>`;

}

function calculateTriangleArea () {
    let height = document.getElementById("inputHeight");
    let heightValue = Number(height.value);


    let base = document.getElementById("inputBase");
    let baseValue = Number(base.value);

    let side3 = Math.sqrt((baseValue**2) + (heightValue**2));

    let area = triangleArea(side3, baseValue, heightValue);
    
    txtTriangleAnswer.innerHTML = `<p>El área es: <br> ${area}</p>`;

}

let txtCircleAnswer = document.getElementById("circleAnswer"); // Círculo

function calculateCirclePerimeter () {
    let circle = document.getElementById("inputRadius");
    let circleValue = circle.value;
    let perimeter = circlePerimeter(circleValue);
    // alert(perimeter);
    txtCircleAnswer.innerHTML = `<p>El perímetro es:<br> ${perimeter}</p>`;

}

function calculateCircleArea () {
    let circle = document.getElementById("inputRadius");
    let circleValue = circle.value;

    let area = circleArea(circleValue);
    // alert(area);
    txtCircleAnswer.innerHTML = `<p>El área es:<br> ${area}</p>`;
}

// Sección de Descuentos

function salePrice (initialPrice, discount) {
    
    const discountedPrice = (initialPrice*discount)/100;
    const listPrice = initialPrice - discountedPrice;

    return `${listPrice}`;
}

//Integración con HTML

let txtSaleAnswer = document.getElementById("saleAnswer");

function calculateSalePrice () {
    let price = document.getElementById("inputPrice");
    let priceValue = price.value;
    
    let sale = document.getElementById("inputSale");
    let saleValue = sale.value;

    let list = salePrice(priceValue, saleValue);
    txtSaleAnswer.innerHTML = `<p>El valor final es:<br> S/. ${list}</p>`;
}

// Promedios, Mediana y Moda

    //Promedio
function calculateAverage (lista) {
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    });

    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}

    //Mediana

    
    function calculateMedian (lista) {
        let cantidad = Math.floor(lista.length)/2;
        let mediana = 0;
        lista.sort((a,b)=> a-b);

    if (lista.length%2 == 0) {
        mediana = (lista[cantidad] + lista[cantidad -1])/2;
    }
    else {
        mediana = lista[cantidad];
    }
    return mediana;
}