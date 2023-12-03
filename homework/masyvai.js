function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
console.log("labas masyvai");

let arr = [];
while (arr.length < 30) {
  arr.push(getRandomIntInclusive(5, 25));
}

console.log(arr);

//2. Naudodamiesi 1 uždavinio masyvu:
//A Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
let itemOver10 = 0;
for (item of arr) {
  if (item > 10) {
    itemOver10++;
  }
}
console.log(itemOver10);

let arrOver10 = arr.filter((el) => el > 10);
console.log("arrOver10", arrOver10.length);

// B Raskite didžiausią masyvo reikšmę ir jos indeksą;
max = Math.max(...arr);
indexOfMax = arr.indexOf(max);
console.log("max", max);
console.log("indexOfMax", indexOfMax);

//C Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
const evenValues = arr.filter((el, index) => index % 2 === 0);
let sum = 0;
function sumFunction(array) {
  for (let item of array) {
    sum += item;
  }
  return sum;
}
console.log("sum", sumFunction(evenValues));

const evenSum = evenValues.reduce((acc, value) => acc + value, 0);
console.log("evenSum", evenSum);

//D Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

let D = arr.map((item, index) => item - index);

console.log("D", D);

//E Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

while (arr.length < 39) {
  arr.push(getRandomIntInclusive(5, 25));
}
console.log("arr didinu:", arr);

//F Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių,
//o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);

let FoddIndex = arr.filter((el, idx) => idx % 2 !== 0);
let FevenIndex = arr.filter((el, idx) => idx % 2 === 0);
console.log("FoddIndex", FoddIndex);
console.log("FevenIndex", FevenIndex);

// G Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;

let G_arr = FevenIndex.map((item) => (item > 15 ? (item = 0) : item));
console.log("G_arr", G_arr);

//H Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
const firstIndexOfValue10 = arr.filter((el, index) => el > 10);
const result = arr.indexOf(firstIndexOfValue10[0]);

console.log("firstIndexOfValue10", firstIndexOfValue10);
console.log("result", result);
console.clear();
//3 Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200.
//Suskaičiuokite kiek yra kiekvienos raidės.

let arrOfLetters = [];
const arrValues = ["A", "B", "C", "D"];

function createRandomLetter(letters) {
  let randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex];
}
while (arrOfLetters.length < 200) {
  arrOfLetters.push(createRandomLetter(arrValues));
}
function poKiekRaidziu(arrOfLetters) {
  let countA = 0;
  let countB = 0;
  let countC = 0;
  let countD = 0;
  for (const item of arrOfLetters) {
    if (item === "A") {
      countA++;
    }
    if (item === "B") {
      countB++;
    }
    if (item === "C") {
      countC++;
    }
    if (item === "D") {
      countD++;
    }
  }
  return [countA, countB, countC, countD];
}
console.log("poKiekRaidziuu", poKiekRaidziu(arrOfLetters));
// console.log("arrValues", arrValues);
// console.log("arrOfLetters", arrOfLetters);

//4 Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes.
//Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
let firstArr = [];
let secondArr = [];
let thirdArr = [];

while (firstArr.length < 200) {
  firstArr.push(createRandomLetter(arrValues));
}
while (secondArr.length < 200) {
  secondArr.push(createRandomLetter(arrValues));
}
while (thirdArr.length < 200) {
  thirdArr.push(createRandomLetter(arrValues));
}
console.log("firstArr", firstArr);
// console.log("secondArr", secondArr);
// console.log("thirdArr", thirdArr);

poKiekRaidziu(firstArr);
poKiekRaidziu(secondArr);
poKiekRaidziu(thirdArr);
console.log("poKiekRaidziu(firstArr):", poKiekRaidziu(firstArr));

let sumOfA =
  poKiekRaidziu(firstArr)[0] +
  poKiekRaidziu(secondArr)[0] +
  poKiekRaidziu(thirdArr)[0];
let sumOfB =
  poKiekRaidziu(firstArr)[1] +
  poKiekRaidziu(secondArr)[1] +
  poKiekRaidziu(thirdArr)[1];
let sumOfC =
  poKiekRaidziu(firstArr)[2] +
  poKiekRaidziu(secondArr)[2] +
  poKiekRaidziu(thirdArr)[2];
let sumOfD =
  poKiekRaidziu(firstArr)[3] +
  poKiekRaidziu(secondArr)[3] +
  poKiekRaidziu(thirdArr)[3];

console.log("sumOfA", sumOfA);
console.log("sumOfB", sumOfB);
console.log("sumOfC", sumOfC);
console.log("sumOfD", sumOfD);

//5 Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100.
//Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
let arr_5_pirmas = [];
for (let i = 0; i < 100; i++) {
  if (!arr_5_pirmas.includes(arr_5_pirmas[i]))
    arr_5_pirmas.push(getRandomInt(100, 999));
}
console.log("arr_5_pirmas", arr_5_pirmas);

let arr_5_antras = [];
for (let i = 0; i < 100; i++) {
  if (!arr_5_antras.includes(arr_5_antras[i]))
    arr_5_antras.push(getRandomInt(100, 999));
}
console.log("arr_5_antras", arr_5_antras);

//6 Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve,
//bet nėra antrame 5 uždavinio masyve.


let arr_6 = arr_5_pirmas.filter(item=> !arr_5_antras.includes(item) );

console.log("arr_6",arr_6);

// 7 Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.
let arr_7 = arr_5_pirmas.filter(item=> arr_5_antras.includes(item) )
console.log("arr_7",arr_7);

// 8. Sugeneruokite masyvą, kurio indeksus sudarytų 5 uždavinio pirmo masyvo reikšmės, o jo reikšmės  būtų iš  antrojo 5 uždavinio masyvo.
let arr_8  = [];

for(let i=0; i<100; i++){
 
    console.log("item", item)

arr_8.push({[arr_5_pirmas[i]] : arr_5_antras[i]})
}

// arr_5_antras[j]
console.log(arr_8)