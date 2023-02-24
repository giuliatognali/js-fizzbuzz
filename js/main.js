'use strict';

const container = document.querySelector('.container');
const cell = document.createElement ('div');

//ciclo for con 4 if differenti 
for(let i = 1; i <= 100; i++){

    const cell = document.createElement ('div');
    container.append(cell);

    if (i % 15 === 0) {
        console.log('fizzbuzz');
        cell.classList.add('div-fizzbuzz');
        cell.append('fizzbuzz');
    }

    else if (i % 3 === 0){
        console.log('fizz');
        cell.classList.add('div-fizz');
        cell.append('fizz');
    }
    else if  (i % 5 === 0){
        console.log('buzz');
        cell.classList.add('div-buzz');
        cell.append('buzz');
    }
    else{
        console.log(i);
        cell.classList.add('div-number');
        cell.append(i);
    }
    
}

