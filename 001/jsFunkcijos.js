//1 Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;

function first(text) {
  return text.toString();
}
console.log(first("laaaabas"));

// 2 Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas atspausdinamas su console.log,
//o antrasis kiek kartų spausdinimas atliekamas. Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;

const number = 5;
function second(text2, number) {
  return text2.repeat(number);
}
console.log(second(first("laaaaabas! "), 5));

//4 Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)

function four(n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}
four(12);
console.log(four(4));

//5 Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77.
//Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.

function getRandomArr(min, max, riba) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const arr = [];

  for (let i = 0; i < riba; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return arr;
}
getRandomArr();
console.log("penktas su trim argumentais", getRandomArr(33, 77, 100));

let arejus = getRandomArr(33, 77, 100);
let dalikliuArr = [];

for (num of arejus) {
  dalikliuArr.push(four(num));
}

arejus.sort((a, b) => {
  const dalikliuSkaiciusA = four(a);
  const dalikliuSkaiciusB = four(b);

  return dalikliuSkaiciusB - dalikliuSkaiciusA;
});
console.log("arejus pagal dalikliu mazejima", arejus);

//6 Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777.
//Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.

const uzd6Arr = getRandomArr(333, 777, 100);
console.log("sestas visas arejus", uzd6Arr);
const uzd6pirminiai = [];
for (const number of uzd6Arr) {
  if (four(number) === 0) {
    uzd6pirminiai.push(number);
  }
}
console.log("uzd6pirminiai:", uzd6pirminiai);

//7 Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra
// atsitiktiniai skaičiai nuo 0 iki 10,
//o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas.

// Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų.
// Paskutinio masyvo paskutinis elementas yra lygus 0;

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let masyvoIlgis = getRandomNumber(10,20) - 1;

let dynamicArr = getRandomArr(0, 10, masyvoIlgis);
dynamicArr.push(0)

for (let i = 0; i < getRandomNumber(10,30); i++) {
  let newArr = [];
  newArr = getRandomArr(0, 10, masyvoIlgis);
  newArr.push(dynamicArr);
  dynamicArr = newArr
}
console.log("iupdate", dynamicArr)


// firstArr[firstArr.length-1].push(0)

// firstArr[firstArr.length-1].push([getRandomArr(0,10,masyvoIlgis-1)])
// console.log("firstArr", firstArr);

// console.log("myArr",myArr)
// console.log("kitasArr",kitasArr)

//8 Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. Skaičiuoti reikia visuose masyvuose ir submasyvuose.

//9 Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33. Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33. Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. Kartokite, kol sąlyga nereikalaus pridėti elemento.

//10 Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 100. Jeigu tokio didelio masyvo (ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, suraskite masyve mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3. Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite.
