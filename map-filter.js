// const number = [3, 4, 5, 6, 7, 8, 9];
// const output = [];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

/*
const numbers = [3, 4, 5, 6, 7, 8, 9];

function square(element) {
    return element * element;
}

numbers.map(function (element, index, array) {
    console.log(element, index, array);
});
// */
/*
const numbers = [3, 4, 5, 6, 7, 8, 9];
function square(element) {
    return element * element;
}

const result = numbers.map(function (element) {
    return element * element;
});
console.log(result);
// */

// const numbers = [3, 4, 5, 6, 7, 8, 9];
// const square = element => element * element

// const numbers = [3, 4, 5, 6, 7, 8, 9];
// const square2 = x => x * x;
/*
const numbers = [3, 4, 5, 6, 7, 8, 9];
const result = numbers.map(x => x * x);
console.log(result);
// */

const numbers = [3, 4, 5, 6, 7, 8, 9];

const bigger = numbers.filter(x => x < 5);

const isTher = numbers.find(x => x > 5);

console.log(isTher);