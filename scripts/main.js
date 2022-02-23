// Código del cuadrado

console.group("Cuadrado");

    const sqrSide = 10;
    console.log(`Los lados del cuadrado miden: ${sqrSide} cm`);

    const sqrPerimeter = 4*sqrSide;
    console.log(`El perímetro del cuadrado es: ${sqrPerimeter} cm`);

    const sqrArea = Math.pow(sqrSide,2);
    console.log(`El área del cuadrado es: ${sqrArea} cmˆ2`);

console.groupEnd();

// Código del triángulo
console.group("Triángulo");
    const triangleSide1 = 10;
    const triangleHeight = 8;
    const triangleBase = 6;
    console.log(`Los lados del triángulo miden: ${triangleSide1} cm, ${triangleHeight} cm y ${triangleBase} cm`);

    const trianglePerimeter = triangleSide1 + triangleHeight + triangleBase;
    console.log(`El perímetro del triángulo es: ${trianglePerimeter} cm`);

    const triangleArea = (triangleBase*triangleHeight)/2;
    console.log(`El área del triángulo es: ${triangleArea} cmˆ2`);
console.groupEnd();

// Código del círculo
console.group("Círculo");
    const circleRadius = 4;
    const circleDiameter = circleRadius*2;
    const pi = Math.PI.toFixed(2);
    console.log(`El radio de la circunferencia es: ${circleRadius} cm y su diámetro es: ${circleDiameter} cm`);

    const circlePerimeter = circleDiameter*pi;
    console.log(`El perímetro del círculo es: ${circlePerimeter}`);

    const circleArea = pi*(Math.pow(circleRadius,2));
    console.log(`El área del círculo es: ${circleArea} cmˆ2`);
console.groupEnd();
