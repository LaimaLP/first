//1 Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0.
//Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni()
//pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu().
//Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {
  constructor(name) {
    this.akmenuKiekis = 0;
    this.name = name;
  }
  prideti1Akmeni() {
    this.akmenuKiekis++;
  }
  pridetiDaugAkmenu(kiekis) {
    this.akmenuKiekis += kiekis;
  }
  kiekPririnktaAkmenu() {
    console.log(
      "1 uzdavinys: " + this.name + " pririnko sitiek: " + this.akmenuKiekis
    );
    return this.akmenuKiekis;
  }
}

const pirmasKibiras = new Kibiras1("Jonas");
const antrasKibiras = new Kibiras1("Petras");

pirmasKibiras.prideti1Akmeni();
pirmasKibiras.pridetiDaugAkmenu(5);
pirmasKibiras.kiekPririnktaAkmenu();
antrasKibiras.prideti1Akmeni();
antrasKibiras.kiekPririnktaAkmenu();

// 2. Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai.
//Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai,
// jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai
// ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir
//metalinės monetos egzistuoja realiame pasaulyje.

class Pinigine {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;
    this.banknotai = 0;
    this.monetos = 0;
  }
  ideti(kiekis) {
    if (kiekis <= 2 && kiekis > 0) {
      this.metaliniaiPinigai += kiekis;
      this.monetos++;
    } else if (kiekis > 0) {
      this.popieriniaiPinigai += kiekis;
      this.banknotai++;
    }
  }

  monetos() {
    return this.monetos;
  }
  banknotai() {
    return this.banknotai;
  }

  suskaiciuoti() {
    console.log("2 uzdavinys: metaliniu pinigu", this.metaliniaiPinigai);
    console.log("2 uzdavinys: popieriniu pinigu", this.popieriniaiPinigai);
    console.log(
      "2 uzdavinys: pinigu suma",
      this.popieriniaiPinigai + this.metaliniaiPinigai
    );
  }
}

const manoPinigine = new Pinigine();
manoPinigine.ideti(10);
manoPinigine.ideti(15);
manoPinigine.ideti(2);
manoPinigine.ideti(1);
manoPinigine.suskaiciuoti();
// manoPinigine.kiekBanknotu()

console.log("manoPinigine", manoPinigine);

// 3.Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0.
// Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(),
// kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas
// keleivių skaičius negali.

class Troleibusas {
  constructor() {
    this.keleiviuSkaicius = 0;
  }
  ilipa(param) {
    this.keleiviuSkaicius += param;
  }
  islipa(param) {
    if (param > this.keleiviuSkaicius) {
      this.keleiviuSkaicius = 0;
    } else {
      this.keleiviuSkaicius = this.keleiviuSkaicius - param;
    }
  }
  vaziuoja() {
    console.log("3 uzdavinys: " + this.keleiviuSkaicius);
  }
}
const trulas = new Troleibusas();
trulas.ilipa(5);
trulas.vaziuoja();
trulas.islipa(2);
trulas.vaziuoja();

//4 (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas
//objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius),
//kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius).
//Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).

let visiKeleiviai = 0;

class Troleibusas2 {
  constructor() {
    this.keleiviuSkaicius = 0;
  }
  static bendrasKeleiviuSkaicius(keleiviuSkaicius, veiksmas) {
    if (veiksmas === "+") {
      visiKeleiviai += keleiviuSkaicius;
    } else {
      visiKeleiviai -= keleiviuSkaicius;
    }
  }

  ilipa(keleiviuSkaicius) {
    this.keleiviuSkaicius += keleiviuSkaicius;
    Troleibusas2.bendrasKeleiviuSkaicius(keleiviuSkaicius, "+");
  }
  islipa(keleiviuSkaicius) {
    if (keleiviuSkaicius > this.keleiviuSkaicius) {
      this.keleiviuSkaicius = 0;
    } else {
      this.keleiviuSkaicius = this.keleiviuSkaicius - keleiviuSkaicius;
    }
    Troleibusas2.bendrasKeleiviuSkaicius(keleiviuSkaicius, "-");
  }
  vaziuoja() {
    console.log(
      "Keleiviu skaicius tam tikrame objekte:",
      this.keleiviuSkaicius
    );
  }

  static keleiviuSkaiciusVisuoseTroleibusuose() {
    console.log("4 uzdavinys: is viso visu keleiviu", visiKeleiviai);
  }
}

const trulas2 = new Troleibusas2();
const trulas3 = new Troleibusas2();
trulas2.ilipa(52);
trulas3.ilipa(2);
trulas2.islipa(3);
trulas2.ilipa(12);
trulas2.vaziuoja();
Troleibusas2.keleiviuSkaiciusVisuoseTroleibusuose();

//7. (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti metodą akmenuSkaiciusVisuoseKibiruose(),
//kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose).
//Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, naudokite statinę savybę visiAkmenys
//(kurioje yra įrašytas ir saugomas bendras akmenų skaičius). Taip pat atitinkamai modifikuokite metodus
//prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).

// let visiAkmenys = bendrasAkmenuSkaicius;

// class Kibiras1 {
//   constructor(name) {
//     this.akmenuKiekis = 0;
//     this.name = name;
//   }
//   static akmenuSkaiciusVisuoseKibiruose(kiekis, metodas){
//     visiAkmenys += this.akmenuKiekis
//     if(metodas === prideti1Akmeni()){
//     visiAkmenys+= (this.akmenuKiekis++)
//   }else{
//     visiAkmenys+=kiekis
//   }
// }

//   prideti1Akmeni() {
//     this.akmenuKiekis++;
//     Kibiras1.akmenuSkaiciusVisuoseKibiruose(kiekis,  prideti1Akmeni())
//   }
//   pridetiDaugAkmenu(kiekis) {
//     this.akmenuKiekis += kiekis;
//     Kibiras1.akmenuSkaiciusVisuoseKibiruose(kiekis, pridetiDaugAkmenu())

//   }
//   kiekPririnktaAkmenu() {
//     console.log(this.name + " pririnko sitiek: " + this.akmenuKiekis);
//     return this.akmenuKiekis;
//   }
// }

// const pirmasKibiras = new Kibiras1("Jonas");
// const antrasKibiras = new Kibiras1("Petras");

// pirmasKibiras.prideti1Akmeni();

// pirmasKibiras.pridetiDaugAkmenu(5);

// pirmasKibiras.kiekPririnktaAkmenu();

// antrasKibiras.prideti1Akmeni();
// antrasKibiras.kiekPririnktaAkmenu();

// 8 Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu.
// Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis-
// kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis,
// tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio.
// Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.
console.clear();
class Stikline {
  constructor(turis) {
    this.turis = turis;
    this.kiekis = 0;
  }
  ipilti(kiekis) {
    this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
    return this;
  }
  ispilti() {
    const kiekis = this.kiekis;
    this.kiekis = 0;
    return kiekis;
  }

  stiklinejeYra() {
    console.log("8 uzdavinys kiekis yra: ", this.kiekis);
  }
}
const stikline1 = new Stikline(200);
const stikline2 = new Stikline(150);
const stikline3 = new Stikline(100);

// stikline3.ipilti(stikline2.ipilti(stikline1.ipilti(500).ispilti()).ispilti())

stikline3.ipilti(30).stiklinejeYra();

// stikline1.stiklinejeYra();
// stikline2.stiklinejeYra();
// stikline3.stiklinejeYra();

// console.log(stikline1);
// console.log(stikline2);
// console.log(stikline3);

//9. Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys, kuri turi savybę dydis,kuriai konstruktoriuje yra
//priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios taip
//pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi
//būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir
//svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į
//Krepsi objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų
//(gali būti truputį daugiau nei dydis).

class Grybas {
  constructor() {
    this.valgomas = !this.random(0, 1);
    this.sukirmijes = !this.random(0, 1);
    this.svoris = this.random(5, 45);
  }

  random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

class Krepsys {
  constructor() {
    this.prikrauta = 0;
    this.dydis = 500;
  }
  deti(grybas) {
    if (!grybas.sukirmijes && grybas.valgomas) {
      this.prikrauta += grybas.svoris;
    }
    return this.dydis >= this.prikrauta;
  }
}

const krepsiukas = new Krepsys();

while (krepsiukas.deti(new Grybas())) {
  // console.log(krepsiukas)
}

console.log("krepsiukas", krepsiukas)

console.log(krepsiukas.prikrauta);
