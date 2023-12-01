console.log("test");
// 1. Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;
// Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį;
// Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;
// Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;
// Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje.
//Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;

const vienas = 5;
const du = 10;
const trys = 17;
const A = vienas + du + trys;
console.log(A);
const B = "" + vienas + du + trys;
console.log(B);
const C = "" + vienas + " " + du + " " + trys;
console.log(C);

const D = "" + C + " " + A;
console.log(D);

//2. Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10),
//kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;

const antras = getRandomIntInclusive(5, 10);
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(antras);

//3 Sukurkite kintamąjį ir jam priskirkite stringą “Labas”.
//Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;

const trecias = "Labas";

function repeat(argument, number) {
  let value = "";
  for (let i = 0; i < number; i++) {
    value += argument;
  }
  return value;
}

console.log("trecias", repeat("Labas ", 2));
//4. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;
console.log("ketvirtas", repeat(antras, 7));

//5. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;

console.log("penktas", repeat(antras, antras));

//6.  Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas,
//bet tik tada jeigu jis didesnis už 7;
console.log("sestas", antras > 7 ? repeat(antras, antras) : null);

function six(parametras) {
  return parametras > 7 ? repeat(parametras, parametras) : null;
}

console.log("six funckijoj", six(antras));

//7 Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(),
// kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;
let septintas;
let suma = 0;
for (let i = 0; i < 5; i++) {
  septintas = getRandomIntInclusive(10, 20);
  suma += septintas;
}
console.log("septintas", septintas);
//B Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų.
//Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;

let septintasB = 0;
for (let i = 0; i < 5; i++) {
  septintasB += getRandomIntInclusive(10, 20);
}
console.log("septintasB:", septintasB);

// C Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą.
//Stringo tipo kintamąjį atspauzdinkite už ciklo ribų jam pasibaigus;
let septintasC = "";
for (let i = 0; i < 5; i++) {
  septintasC += getRandomIntInclusive(10, 20) + " ";
}
console.log("septintasC", septintasC);

// 7D Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą.
//Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje.
//Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log;

let septintasD = "";
let sumaD = 0;
for (let i = 0; i < 5; i++) {
  septintasD += getRandomIntInclusive(10, 20) + " ";
  sumaD += getRandomIntInclusive(10, 20);
}
let resultD = septintasD + sumaD;
console.log("septintasD", septintasD);
console.log("sumaD", sumaD);

console.log("resultD", resultD);

// 8 Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų.
//Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25.
//Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;

let sugeneruotasSkaicius;
let testiGeneravima = true;
let kiekIteraciju = 0;
let kiekSumuojamu = 0;
let sumaC = 0;
let kiekAtmetamu;

while (testiGeneravima) {
  sugeneruotasSkaicius = getRandomIntInclusive(10, 25);
  console.log("cikle", sugeneruotasSkaicius);
  if (sugeneruotasSkaicius < 12) {
    testiGeneravima = false;
  }
  kiekIteraciju++;
  if (sugeneruotasSkaicius < 18) {
    sumaC += sugeneruotasSkaicius;
    kiekSumuojamu++
  }
}
console.log("astuntasPirmas", sugeneruotasSkaicius);
console.log("kiekIteraciju", kiekIteraciju);
console.log("sumaC", sumaC)
