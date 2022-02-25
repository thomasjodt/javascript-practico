const isPair = number => number%2==0;

// SECCIÓN DE SALARIOS
let relation = [];
// let relationOrdered = relation.sort((a,b) => a-b);

//Agregar los números a la relación
function addNumbers (number) {
    let salary = document.getElementById("inputSalary");
    let salaryValue = Number(salary.value);
    number = salaryValue;
    relation.push(number);
}

//CALCULADORA DE MEDIANA
function medianaSalarios(lista){
    lista.sort((a,b) => a-b);
    const mitadLista = Math.floor(lista.length/2);
    if(isPair(lista.length)) {
        return (lista[mitadLista -1] + lista[mitadLista])/2;
    } else {
        return lista[mitadLista];
    }
}

//Mediana General
// const medianaGeneral = medianaSalarios(relation);

function medianaTop (lista){
    lista.sort((a,b) => a-b);
    const topSpliceStart = Math.floor(lista.length*9/10);
    const topSpliceCount = lista.length - topSpliceStart ;
    const relationTop = lista.slice().splice(topSpliceStart, topSpliceCount);

    const mitadLista = Math.floor(relationTop.length/2);
    if(isPair(relationTop.length)) {
        return (relationTop[mitadLista -1] + relationTop[mitadLista])/2;
    } else {
        return relationTop[mitadLista];
    }    
}

let txtSalariesAnswer = document.getElementById("salariesAnswer");
function calculateGeneral () {
    txtSalariesAnswer.innerHTML = `<p> La media General es: <br> ${medianaSalarios(relation)}</p>`;
}

function calculateTop () {
    txtSalariesAnswer.innerHTML = `<p>La media del Top es:<br> ${medianaTop(relation)}`;
}