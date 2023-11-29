console.log('Welcome to magic farm');

const farm = [
    'Cow',
    'Pig',
    'Chicken',
    'Dog',
    'Cat',
    'Cow',
    'Horse',
    'Sheep',
    'Goat',
    'Cow',
    'Duck',
    'Cat',
    'Turkey',
];

// Kindergarden
let cowsSum1 = 0;
for (let i = 0; i < farm.length; i++) {
    if (farm[i] == 'Cow') {
        cowsSum1++;
    }
}
console.log('cowsSum1', cowsSum1);

// Middle school
let cowsSum2 = 0;
for (const animal of farm) {
    if (animal == 'Cow') {
        cowsSum2++;
    }
}
console.log('cowsSum2', cowsSum2);

// High school
let cowsSum3 = 0;
farm.forEach(animal => animal == 'Cow' ? cowsSum3++ : null);

console.log('cowsSum3', cowsSum3);

let cowsSum4 = 0;
// University
farm.forEach(animal => animal == 'Cow' && cowsSum4++);

console.log('cowsSum4', cowsSum4);

const farm2 = [
    { name: 'Cow', age: 5 },
    { name: 'Pig', age: 3 },
    { name: 'Chicken', age: 1 },
    { name: 'Dog', age: 2 },
    { name: 'Cat', age: 4 },
    { name: 'Cow', age: 7 },
    { name: 'Horse', age: 4 },
    { name: 'Sheep', age: 6 },
    { name: 'Goat', age: 3 },
    { name: 'Cow', age: 2 },
    { name: 'Duck', age: 1 },
    { name: 'Cat', age: 2 },
    { name: 'Turkey', age: 3 },
];

// Kindergarden
let cowsAgeSum5 = 0;
for (let i = 0; i < farm2.length; i++) {
    if (farm2[i].name == 'Cow') {
        cowsAgeSum5 += farm2[i].age;
    }
}
console.log('cowsAgeSum5', cowsAgeSum5);

// Middle school
let cowsAgeSum6 = 0;
for (const animal of farm2) {
    if (animal.name == 'Cow') {
        cowsAgeSum6 += animal.age;
    }
}

console.log('cowsAgeSum6', cowsAgeSum6);

// High school
let cowsAgeSum7 = 0;
farm2.forEach(animal => animal.name == 'Cow' ? cowsAgeSum7 += animal.age : null);

console.log('cowsAgeSum7', cowsAgeSum7);

// University
let cowsAgeSum8 = 0;
farm2.forEach(animal => animal.name == 'Cow' && (cowsAgeSum8 += animal.age));

console.log('cowsAgeSum8', cowsAgeSum8);

