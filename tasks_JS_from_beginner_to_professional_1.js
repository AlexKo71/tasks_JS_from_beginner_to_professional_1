// Задача «Камень, ножницы, бумага»
let arr = ["камень", "бумага", "ножницы"];
let randomNumber = Math.round(Math.random() * 2);

let message;
let input = prompt("Введите: камень или бумага или ножницы");
let indexAsk = arr.indexOf(input);
if (indexAsk === -1){
    message = "Вы ввели неверное слово, попробуйте снова!";
}
else if(indexAsk === randomNumber) {
    message = "Ничья!";
} else if (indexAsk === 2 && randomNumber === 0){
    message = "Вы проиграли, камень бьет ножницы";
} else if (indexAsk === 0 && randomNumber === 2){
    message = "Вы выиграли, камень бьет ножницы";
} else if (indexAsk > randomNumber){
    message = "Вы победили, " + arr[indexAsk] + " бьет " + arr[randomNumber];
} else {
    message = "Вы проиграли, " + arr[indexAsk] + " не бьет " + arr[randomNumber]; 
}

console.log(message);

// Последовательность Фибоначчи:
let n1 = 0;
let n2 = 1;
let temp;
arr = [n1,n2];

while (arr.length < 20){
    temp = n1 + n2;
    arr.push(temp);
    n1 = n2;
    n2 = temp;
}
console.log(arr);

// Игра «Угадай число»:
let max = 25;
let randomNum = Math.floor (Math.random() * max) + 1;
console.log(randomNum);
let condition = false;
let min;
let inputNum = Number(prompt("Введите целое число от 1 до " + max));
while (inputNum !== randomNum){
    if(inputNum < randomNum){
    min = inputNum;
    inputNum = Number(prompt("Искомое число больше и оно в пределах от " + min + " до " + max));
    }else if(inputNum > randomNum){
    max = inputNum;
    inputNum = Number(prompt("Искомое число меньше и оно в пределах от " + min + " до " + max));
}
}
console.log("Вы угадали число - оно равно " + randomNum);

// «счетчик»
let counter = 0;
let step = 5;
do{
    console.log(counter);
    counter = counter + step;
} while (counter <= 100);

// TASK 5-3
let myWork = [];
for(let i = 1; i <= 10; i++){
    let stat = i % 2 ? true : false;
    let temp = {name: 'Lesson ' + i, status: stat};
    myWork.push(temp);
}
console.log(myWork);

// TASK 5-4
let myTable = [];
let countRows = 6;
let countColumn = 5;
let count4 = 0;
for(i = 0; i <= countRows; i++) {
    myTable.push([]);
        for(let j = 0; j <= countColumn; j++){
            myTable[i].push(++count4);
        }
}
console.log(myTable);

// TASK 5-5
let arrayMesh = [];
let numberOfCells = 64;
let count = 0;
var row = 8;
for(i = 0; i < row; i++){
    let array = [];
    for (j = 0; j < row; j++){
        array.push (count + 1);
        count++;
    }
    arrayMesh[i] = array;
}
console.log(arrayMesh);

// TASK 5-6
let array = [];
for(let i = 0; i < 10; i++){
    array.push(i);
}
console.log(array);

for(let j = 0; j < array.length; j++){
    console.log(array[j]);
}

for(let ar of array){
    console.log(ar);
}

// TASK 5-7
let building = {
    name: "Rathaus",
    year: 1892,
    color: "yellow",
    status: "special",
  };
  for (let property in building) {
    console.log(property, building[property]);
  }
  
  let building1 = [ "name: 'Rathaus'", "year: 1982", "color: 'yellow'", "status: 'special'"];
      for(let i = 0; i < building1.length; i++){
          console.log(building1[i]);
      }

// TASK 5-8
let text = "Hello";
let exceptNumber = 3;
for (let i = 0; i <= 10; i++) {
  if (i === exceptNumber) {
    continue;
  } else {
    console.log(i);
  }
}
console.log("exceptNumber =", exceptNumber);

// «Математическая таблица умножения»:
let multiplicationTable = [];
let value = 9;
for(let i = 1; i <= value; i++){
    smallTable = [];
    for(let j = 0; j <= 9; j++){
        multiplication = i * j;
        smallTable.push(i + " x " + j + " = " + multiplication);
        // console.log(i + " x " + j + " = " + i * j);
    }
    console.log(smallTable);
}
