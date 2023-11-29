let A = 5;
let B = A; // by value

A = 10;

console.log('A', A);
console.log('B', B);

let C = { value: 5 };
let D = C; // by reference

C.value = 10;

console.log('C', C);
console.log('D', D);

let E = 12;
let F = 12;

console.log(E == F);

let G = { value: 12 };
let H = { value: 12 };

console.log(G == H);

// rest and spread


// ,,,,,,,,,,, => [] rest
// {} => ,,,,,,,,,,,, spread

const sum = (a, ...numbers) => {
    console.log('numbers', numbers);
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    console.log('result', result, a);
}


sum(5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23);

let V = { value: 5, name: 'Vasya', age: 25, hasCat: true };
let I = { age: 44, ...V, hasCat: false };

V.value = 10;

console.log('V', V);
console.log('I', I);

const mas1 = [1, 2, 3, 4, 5];
const obj1 = { value: 5, name: 'Vasya', age: 25 };

const [T, M] = mas1;
const { age, what } = obj1;

console.log('T', T);
console.log('M', M);

console.log('age', age);
console.log('what', what);