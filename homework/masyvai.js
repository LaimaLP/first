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

let D = arr.map((item, index)=> item-index)

console.log("D", D)

//E Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

while(arr.length<39){
    arr.push(getRandomIntInclusive(5, 25))
}
console.log("arr didinu:", arr)

//F Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, 
//o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);

let FoddIndex = arr.filter((el, idx) => idx%2!==0);
let FevenIndex =arr.filter((el, idx) => idx%2===0);;
console.log("FoddIndex",FoddIndex)
console.log("FevenIndex",FevenIndex)

// G Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;

let G_arr = FevenIndex.map(item=> item>15? item=0:item)
console.log("G_arr", G_arr)

//H Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
const firstIndexOfValue10 = arr.filter((el, index)=> el>10);
const result = arr.indexOf(firstIndexOfValue10[0]);

console.log("firstIndexOfValue10", firstIndexOfValue10)
console.log("result", result)

