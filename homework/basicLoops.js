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

// let sugeneruotasSkaicius;
// let testiGeneravima = true;
// let kiekIteraciju = 0;
// let kiekSumuojamu = 0;
// let sumaC = 0;
// let kiekAtmetamu;
// let kiekLyginiu = 0;
// let kiekNelyginiu =0;

// while (testiGeneravima) {
//   sugeneruotasSkaicius = getRandomIntInclusive(10, 25);
//   console.log("cikle", sugeneruotasSkaicius);

//   if (sugeneruotasSkaicius < 12) {
//     testiGeneravima = false;
//   }

//   if(sugeneruotasSkaicius%2 !==0){
//     kiekNelyginiu++;
//   }else{
//     kiekLyginiu++;
//   }
//   kiekIteraciju++;
//   if (sugeneruotasSkaicius < 18) {
//     sumaC += sugeneruotasSkaicius;
//     kiekSumuojamu++
//   }

// }
// console.log("astuntoResult", sugeneruotasSkaicius);
// console.log("kiekIteraciju", kiekIteraciju);
// console.log("sumaC", sumaC)
// console.log("kiekNelyginiu:", kiekNelyginiu)
// console.log("kiekLyginiu:", kiekLyginiu)
// 8 F Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo).
// Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje.
console.clear();

let sugeneruotasSkaicius;
let testiGeneravima = true;
let kiekIteraciju = 0;
let kiekSumuojamu = 0;
let sumaC = 0;
let kiekAtmetamu;
let kiekLyginiu = 0;
let kiekNelyginiu = 0;

let iteracijuSk = kiekIteraciju++;

while (kiekIteraciju >= 20) {
  sugeneruotasSkaicius = getRandomIntInclusive(10, 25);
  console.log("cikle", sugeneruotasSkaicius);
  kiekIteraciju++;

  if (sugeneruotasSkaicius < 12) {
    testiGeneravima = false;
  }
}

console.log("astuntoResult", sugeneruotasSkaicius);
console.log("kiekIteraciju", kiekIteraciju);
console.clear();
//9. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10.
//Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
//A Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas.
//Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas.
//Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
// B Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą
//ir paskaičiuokite iteracijas analogiškai kaip A dalyje;


//A
let isorinesIteracijos = 0;
let vidinesIteracijos = 0;
let generuojamas = 0;
let arTestiCIkla = true;

// for (let i = 0; arTestiCIkla; i++) {
while (arTestiCIkla) {
  generuojamas = getRandomIntInclusive(5, 10);

  console.log("generuojamas viduje", generuojamas);

  isorinesIteracijos++;
  if (generuojamas === 5) {
    arTestiCIkla = false;
  }

  for (let i = 1; i <= generuojamas; i++) {
    vidinesIteracijos++;
  }
}
console.log("generuojamas", generuojamas);
console.log("isorinesIteracijos", isorinesIteracijos);
console.log("vidinesIteracijos", vidinesIteracijos);

// 9to B: 

let B_isorinesIteracijos = 0;
let B_vidinesIteracijos = 0;
let B_generuojamas = 0;
let B_arTestiCIkla = true;
let gavauPenkis = 0;
while (B_arTestiCIkla) {
  B_generuojamas = getRandomIntInclusive(5, 10);
  B_isorinesIteracijos++;
  if (B_generuojamas === 5) {
    gavauPenkis++;
  }
    if (gavauPenkis === 3) {
      B_arTestiCIkla = false;
    }
  
  
  for (let i = 1; i <= B_generuojamas; i++) {
    B_vidinesIteracijos++;
  }
}
console.log("gavauPenkis", gavauPenkis)
console.log("B_generuojamas", B_generuojamas);
console.log("B_isorinesIteracijos", B_isorinesIteracijos);
console.log("B_vidinesIteracijos", B_vidinesIteracijos);

//9to C Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;

let C_isorinesIteracijos = 0;
let C_vidinesIteracijos = 0;
let C_generuojamas = 0;
let C_arTestiCIkla = true;
let threeInRow5 = 0;
while (C_arTestiCIkla) {

  C_generuojamas = getRandomIntInclusive(5, 10);
  C_isorinesIteracijos++;

  if (C_generuojamas === 5) {
    threeInRow5++;
  }else{
    threeInRow5=0
  }
    if (threeInRow5 === 3) {
      C_arTestiCIkla = false;
    }
  
  
  for (let i = 1; i <= C_generuojamas; i++) {
    C_vidinesIteracijos++;
  }
}
console.log("threeInRow5", threeInRow5)
console.log("C_generuojamas", C_generuojamas);
console.log("C_isorinesIteracijos", C_isorinesIteracijos);
console.log("C_vidinesIteracijos", C_vidinesIteracijos);





//10. Kazys ir Petras žaidžiai bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20,
// Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu
//ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​.
// Žaidimą laimi tas, kas greičiau surenka 222 taškus.
//Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.

// let PetroTaskuKiekis = 0;
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(
//   "PetroTaskuKiekis:",
//   `Petro taškai ${getRandomIntInclusive(10, 20)}`
// );
// console.log("KazioTaskuKiekis", `Kazio taškai ${getRandomIntInclusive(5, 25)}`);

// let PetroT = getRandomIntInclusive(10, 20);
// let KazioT = getRandomIntInclusive(5, 25);

// function whoseWon() {
//   return PetroT > KazioT ? "Petras" : "Kazys";
// }

// console.log(
//   `Petras surinko ${PetroT}, Kazys ${KazioT}. Partija laimejo: ${whoseWon()} `
// );

// let PetroSum = 0;
// let KazioSum = 0;
// let is222Reached = false;
// function checkWhoFirstReach222() {
//   while (!is222Reached) {
//     PetroSum += getRandomIntInclusive(10, 20);
//     KazioSum += getRandomIntInclusive(5, 25);
//     if (PetroSum >= 222) {
//       is222Reached = true;
//       alert("Petras won");
//     }
//     if (KazioSum >= 222) {
//       is222Reached = true;
//       alert("Kazys won");
//     }
//   }
// }

// checkWhoFirstReach222();
// console.log("kuris pasieke?:", `Petro: ${PetroSum}, Kazio: ${KazioSum}`);
