// Promedios, Mediana y Moda

const list = [];


function addNumber(number) {
    list.sort((a,b) => a-b);
    let inputList = document.getElementById("inputList");
    let listValue = Number(inputList.value);
    number = listValue;
    list.push(number);
}

// list.sort((a,b) => a-b);

//Promedio
function average (array) {
    array = list;
    const suma = array.reduce((a,b) => a+b);
    return suma/array.length;
}

//Mediana
function median(array){
    list.sort((a,b) => a-b);
    array = list;
    const halfList = Math.floor(array.length/2);
    if(isPair(array.length)) {
        return (array[halfList -1] + array[halfList])/2;
    } else {
        return array[halfList];
    }
}

// Moda
// const lista1 = [1,1,1,2,2,3,3,3,3,3,3,4,5,4,5,4,5,2,3,4,5];

function mode(array){
    array = list;
    array.sort((a,b) => a-b);
    const listCount = {};
    array.map(function(obj){
        if(listCount[obj]){
            return listCount[obj] += 1;
        } else {
            return listCount[obj] = 1;
        }
    });
    const listArray = Object.entries(listCount);
    return listArray[listArray.length -1][0];
}

let txtAverageAnswer = document.getElementById("averagesAnswer");

function calculateAverage () {
    txtAverageAnswer.innerHTML = `<p>El promedio es: <br> ${average().toFixed(2)}</p>`;
}
function calculateMedian () {
    txtAverageAnswer.innerHTML = `<p>La mediana es: <br> ${median()}</p>`;
}
function calculateMode () {
    txtAverageAnswer.innerHTML = `<p>La moda es: <br> ${mode()}</p>`;
}