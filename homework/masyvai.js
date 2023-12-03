function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

//1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
console.log("labas masyvai")


let arr=[]
while(arr.length<30){
arr.push(getRandomIntInclusive(5,25))
}

console.log(arr)

//2. Naudodamiesi 1 uždavinio masyvu:
//A Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
let itemOver10 = 0;
for(item of arr){
    if(item>10){
        itemOver10++
    }
}
console.log(itemOver10)

let arrOver10 = arr.filter((el)=>el>10)
console.log("arrOver10", arrOver10.length)

// B Raskite didžiausią masyvo reikšmę ir jos indeksą;
max = Math.max(...arr);
indexOfMax = arr.indexOf(max)
console.log("max", max)
console.log("indexOfMax", indexOfMax)

//C Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
