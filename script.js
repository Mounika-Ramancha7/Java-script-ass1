console.log("java ass1")

console.log('Question 1')

let str1 = 'Today is';
let str2 = '      a beautiful day    '
let str3 = '  In Hawaii.   '
let Result = str1 + " " + str2.trim() + str3.trimEnd();

console.log(Result);












// let input = 12;

// if (typeof input === 'string') {

//     input = input.tolowercase();

// } else if (typeof input === 'number') {
//     input = 'number';
// }











console.log('Question 2')

switch (input = 'a') {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('Vowel');
        break;
    case 'number':
        console.log('Non-alphabet');
        break;
    default:
        console.log('Non-Vowel');
}




console.log('Question 3')
let a = 10;
let b = 20;
let c;
let userOperation = '+';

switch (userOperation) {
    case "+":
        c = a + b;
        break;
    case "-":
        c = a - b;
        break;
    case "*":
        c = a * b;
        break;
    case "/":
        c = a / b;
        break;
    default:
        console.log('some error');



}

console.log(c);





console.log('Question 4')

let p = 10;
let q = 20;
let r = 30;

if (p === q && q === r && r === p) {
    console.log("Equilateral Triangle");
}
else if (p === q || p === r || q === r) {
    console.log("Isosceless Triangle");
}
else {
    console.log("Scalene Triangle");
}





console.log('Question 5')

let units = prompt('Enter unit');
let total = 0;
if (units <= 50) {
    total = units * 0.5;
}
else if (units >= 51 && units <= 150) {
    total = (50 * 0.5) + (units - 50) * 0.75;
}
else if (units >= 150 && units <= 250) {
    total = (50 * 0.5) + (100 * 0.75) + (units - 150) * 1.2;
}
else if (units > 250) {
    total = (50 * 0.5) + (100 * 0.75) + (100 * 1.2) + (units - 250) * 1.5;
}

total = total + (total * 0.2)

console.log(total)