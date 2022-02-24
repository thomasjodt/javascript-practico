// Promedios, Mediana y Moda
const list = [];

function addNumber(number) {
    let inputList = document.getElementById("inputList");
    let listValue = Number(inputList.value);
    number = listValue;
    list.push(number);
}

//Promedio
function average (array) {
    array = list;
    const suma = array.reduce((a,b) => a+b);
    return suma/array.length;
}

//Mediana
function median(array){
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
    const listCount = {};
    array.map(obj => {
        if(listCount[obj]){
            listCount[obj] += 1;
        } else {
            listCount[obj] = 1;
        }
    });
    const listArray = Object.entries(listCount).sort((a,b) => a[1] - b[1]);
    const mode = listArray[listArray.length -1][0];
    return mode;
}

let txtAverageAnswer = document.getElementById("averagesAnswer");

function calculateAverage () {
    txtAverageAnswer.innerHTML = `<p>El promedio es: <br> ${average()}</p>`;
}
function calculateMedian () {
    txtAverageAnswer.innerHTML = `<p>La mediana es: <br> ${median()}</p>`;
}
function calculateMode () {
    txtAverageAnswer.innerHTML = `<p>La moda es: <br> ${mode()}</p>`;
}