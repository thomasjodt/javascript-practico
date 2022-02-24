// SECCIÓN DE SUELDOS

// COMPROBAR SI UN NÚMERO ES PAR
const isPair = number => number%2==0;

//CALCULADORA DE MEDIANA
function medianaSalarios(lista){
    const mitadLista = Math.floor(lista.length/2);
    if(isPair(lista.length)) {
        return (lista[mitadLista -1] + lista[mitadLista])/2;
    } else {
        return lista[mitadLista];
    }
}

// SECCIÓN DE SALARIOS
const relation = [{name: 'Xavier', salary: 2400,},
                  {name: "John", salary: 1000},
                  {name: "Bill", salary: 1400},
                  {name: "Luke", salary: 980},
                  {name: 'Marco', salary: 1200},
                  {name: 'Orlando', salary: 4000}];


//Mediana General
const salarios = relation.map(obj => obj.salary);
const salariosSorted = salarios.slice().sort((a,b) => a-b);
const medianaGeneral = medianaSalarios(salariosSorted);

//Mediana Top 10%
const spliceStart = Math.floor((salariosSorted.length * 9) / 10);
const spliceCount = salariosSorted.length - spliceStart;
const salariosTop10 = salariosSorted.slice().splice(spliceStart, spliceCount);
const medianaTop10 = medianaSalarios(salariosTop10);