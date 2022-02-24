// Código del cuadrado
const sqrPerimeter = side => `${side*4} cm `;
const sqrArea = side => `${Math.pow(side,2)} cm2`;
// Código del Triángulo
const trianglePerimeter = (side, base, height) => `${side + base + height} cm`;
const triangleArea = (side, base, height) => `${(base*height)/2} cm`;
// CÓDIGO DEL CÍRCULO
const circlePerimeter = radius => `${(Math.PI*radius*2).toFixed(2)} cm`;
const circleArea = radius => `${(Math.PI*(Math.pow(radius,2))).toFixed(2)} cm2`;

// Interactuación con HTML
const txtSqrAnswer = document.getElementById("sqrAnswer"); // Cuadrado
const txtTriangleAnswer = document.getElementById("triangleAnswer"); // Triángulo
const txtCircleAnswer = document.getElementById("circleAnswer"); // Círculo

function calculateSquarePerimeter () {
    let sqr = document.getElementById("inputSqr");
    let sqrValue = sqr.value;
    let perimeter = sqrPerimeter(sqrValue);
    txtSqrAnswer.innerHTML = `<p>El perímetro es:<br> ${perimeter}</p>`;
}

function calculateSquareArea () {
    let sqr = document.getElementById("inputSqr");
    let sqrValue = sqr.value;
    let area = sqrArea(sqrValue);
    txtSqrAnswer.innerHTML = `<p>El área es:<br> ${area}</p>`;
}

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


function calculateCirclePerimeter () {
    let circle = document.getElementById("inputRadius");
    let circleValue = circle.value;
    let perimeter = circlePerimeter(circleValue);
    txtCircleAnswer.innerHTML = `<p>El perímetro es:<br> ${perimeter}</p>`;
}

function calculateCircleArea () {
    let circle = document.getElementById("inputRadius");
    let circleValue = circle.value;
    let area = circleArea(circleValue);
    txtCircleAnswer.innerHTML = `<p>El área es:<br> ${area}</p>`;
}
