'use strict';

const container = document.querySelector('.container');
const cell = document.createElement ('div');

//ciclo for con 4 if differenti 
for(let i = 1; i <= 100; i++){

    if (i % 15 === 0) {
        console.log('fizzbuzz');
        const cell = document.createElement ('div');
        cell.classList.add('div-fizzbuzz');
        cell.append('fizzbuzz');
        container.append(cell);
    }

    else if (i % 3 === 0){
        console.log('fizz');
        const cell = document.createElement ('div');
        cell.classList.add('div-fizz');
        cell.append('fizz');
        container.append(cell);

    }
    else if  (i % 5 === 0){
        console.log('buzz');
        const cell = document.createElement ('div');
        cell.classList.add('div-buzz');
        cell.append('buzz');
        container.append(cell);
    }
    else{
        console.log(i);
        const cell = document.createElement ('div');
        cell.classList.add('div-number');
        cell.append(i);
        container.append(cell);
    }
    
}

