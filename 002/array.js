console.log("labas");

const colors = ["pink", "orange", "yellow", "pink", "blue", "indigo", "pink"];

// 1.vietoj pink black
// 2. pink to skyblue

// let firstArr = [];
// for (color of colors) {
//   if (color === "pink") {
//     firstArr.push("black");
//   } else {
//     firstArr.push(color);
//   }
// }
// console.log(firstArr);

// let secondArr = [];
// for (color of colors) {
//   if (color === "skyblue") {
//     secondArr.push("black");
//   } else {
//     secondArr.push(color);
//   }
// }
// console.log(secondArr);

const colors1 = [...colors]; //nusikopijavimas
const colors2 = [...colors];

colors1.forEach((color, index) => {
    if (color == 'pink') {
        colors1[index] = 'black';
    }
});

console.log(colors1);

colors2.forEach((color, index) => {
    if (color == 'pink') {
        colors2[index] = 'skyblue';
    }
});

console.log(colors2);

const updateColor = colors.map(color => color==="pink"? "black" : color);

const updateColor2 = colors.map(color => color==="pink"? "skyblue" : color);

// console.log("updateColor", updateColor)
// console.log("updateColor2", updateColor2)



const colors22 = [
    { name: 'pink' },
    { name: 'orange' },
    { name: 'yellow' },
    { name: 'pink' },
    { name: 'blue' },
    { name: 'indigo' },
    { name: 'pink' }
];
const updateColorObj2 = colors22.map(color => color.name==="pink"? {name:"black"} : color);

const updateColorObj = colors22.map(color => color.name==="pink"? {name:"skyblue"} : color);

// console.log(updateColorObj)
// console.log(updateColorObj2)



const colors44 = [
    {name: 'pink', age: 12},
    {name: 'orange', age: 13},
    {name: 'yellow', age: 14},
    {name: 'pink', age: 15},
    {name: 'blue', age: 16},
    {name: 'indigo', age: 17},
    {name: 'pink', age: 18}
];


const updateColornoAge = colors44.map(color => color.name==="pink"? {...color, name:"skyblue"} : {...color});

console.log("updateColornoAge", updateColornoAge)


//kova su sintakse

const colors45 = [
    {name: 'pink', age: 12},
    {name: 'orange', age: 13},
    {name: 'yellow', age: 14},
    {name: 'pink', age: 15, tractor: 'John Deere'},
    {name: 'blue', age: 16},
    {name: 'indigo', age: 17},
    {name: 'pink', age: 18}
];

const allblack = colors45.map(color => ({...color, name:"black"}));

console.log("allblack", allblack)


const cats = [
    {name: 'Tomas', age: 12},
    {name: 'Pukis', age: 13},
    {name: 'Juodis', age: 14},
    {name: 'Margis', age: 15, tractor: 'John Deere'},
    {name: 'Ryzas', age: 16},
    {name: 'Pukis', age: 17},
    {name: 'Pukis', age: 18}
];

const noPukis = cats.filter(cat => cat.name !=="Pukis");
console.log("noPukis", noPukis);


const cats2 = [
    {name: 'Tomas', age: 12},
    {name: 'Juodis', age: 13},
    {name: 'Juodis', age: 14},
    {name: 'Margis', age: 15, tractor: 'John Deere'},
    {name: 'Ryzas', age: 16},
    {name: 'Pukis', age: 17},
    {name: 'Juodis', age: 18}
];

const noJuodisPlusAge = cats2
.filter(cat => cat.name !=="Juodis" )
.map(cat => ({...cat, age: cat.age +1}))
// console.log("noJuodisPlus", noJuodisPlus)

console.log("noJuodisPlusAge", noJuodisPlusAge)
console.log("cats2", cats2)

let counter = 0;
const what = 2;
// const j= cats2.find(cat => {
//     if(cat.name =="Juodis"){
//     counter++
//     }
//     return counter == what;
   
// })



const j=cats2.find(cat => cat.name == "Juodis" && ++counter ==what);

console.log(j)