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
 
   return  argument.repeat(number)
    
    
  }


repeat()
console.log(repeat("Labas",5))
//4. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;
