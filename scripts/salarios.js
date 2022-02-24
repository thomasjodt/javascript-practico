// SECCIÓN DE SALARIOS
let relation = [];

//Agregar los números a la relación
function addNumbers (number) {
    let salary = document.getElementById("inputSalary");
    let salaryValue = Number(salary.value);
    number = salaryValue;
    relation.push(number);
}

// COMPROBAR SI UN NÚMERO ES PAR
const isPair = number => number%2==0;


//CALCULADORA DE MEDIANA
function medianaSalarios(lista){
    relation.sort((a,b) => a-b);
    lista = relation;
    const mitadLista = Math.floor(lista.length/2);
    if(isPair(lista.length)) {
        return (lista[mitadLista -1] + lista[mitadLista])/2;
    } else {
        return lista[mitadLista];
    }
}

//Mediana General
const medianaGeneral = medianaSalarios(relation);

//Mediana Top 10%
const spliceStart = Math.floor((relation.length * 9) / 10);
const spliceCount = relation.length - spliceStart;
const salariosTop10 = relation.slice().splice(spliceStart, spliceCount);
const medianaTop10 = medianaSalarios(salariosTop10);


let txtSalariesAnswer = document.getElementById("salariesAnswer");
function calculateGeneral () {
    txtSalariesAnswer.innerHTML = `<p> La media General es: <br> ${medianaGeneral}</p>`;
}

function calculateTop () {
    txtSalariesAnswer.innerHTML = `<p>La media del Top es:<br> ${medianaTop10}`;
}