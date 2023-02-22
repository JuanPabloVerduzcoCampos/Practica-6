let greeting = 'Hi greet 5';
let greet = () => {
    console.log(greeting);
}

let jump = () => {
    console.log('Jai desde jump');
}

let suma = () => {
    let x = 1;
    let y = 1;
    console.log(x+y);
}

let  date = () => {
    let dia = '3'
    let mes = 'Abri'
    let año = '2023' 
    console.log(`${dia} de ${mes} del ${año}`);
}



module.exports = {
    greet,
    jump,
    suma,
    date
}