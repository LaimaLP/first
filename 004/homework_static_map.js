console.log("test");

//4 (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas
//objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius),
//kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius).
//Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).

let visiKeleiviai = 0;

class Troleibusas2 {
  constructor(name) {
    this.keleiviuSkaicius = 0;
    this.name = name;
  }
  static bendrasKeleiviuSkaicius(keleiviuSkaicius, veiksmas) {
    visiKeleiviai =
      veiksmas === "+"
        ? (visiKeleiviai += keleiviuSkaicius)
        : (visiKeleiviai -= keleiviuSkaicius);
  }
  ilipa(kiekis) {
    this.keleiviuSkaicius += kiekis;
    this.constructor.bendrasKeleiviuSkaicius(kiekis, "+");
  }
  islipa(kiekis) {
    this.keleiviuSkaicius =
      kiekis > this.keleiviuSkaicius ? 0 : this.keleiviuSkaicius - kiekis;

    this.constructor.bendrasKeleiviuSkaicius(kiekis, "-");
  }

  vaziuoja() {
    console.log(
      "Keleiviu skaicius tam tikrame objekte:",
      `${this.name} ${this.keleiviuSkaicius}`
    );
  }

  static keleiviuSkaiciusVisuoseTroleibusuose() {
    console.log("4 uzdavinys: is viso visu keleiviu", visiKeleiviai);
  }
}

const trulas2 = new Troleibusas2("Laimos");
const trulas3 = new Troleibusas2("Ada");
trulas2.ilipa(52);
trulas2.islipa(12);

trulas2.vaziuoja();
trulas3.ilipa(33);
trulas3.vaziuoja();
// trulas3.ilipa(2);
// trulas2.islipa(3);
// trulas2.ilipa(12);
// trulas2.vaziuoja();
Troleibusas2.keleiviuSkaiciusVisuoseTroleibusuose();
console.log("--------------------");

//5 (MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas.
//Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(),
//kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus,
//tokiu atveju produktų kiekis turėtų sumuotis.

class PirkiniuKrepselis {
  constructor() {
    this.turinys = new Map();
  }
  idetiProdukta(pavadinimas, kiekis) {
    if (this.turinys.has(pavadinimas)) {
      this.turinys.set(pavadinimas, this.turinys.get(pavadinimas) + kiekis);
    } else {
      this.turinys.set(pavadinimas, kiekis);
    }
  }
  idetiSureli(kiekis) {
    this.idetiProdukta("surelis", kiekis);
    return this;
  }
  idetiPieno(kiekis) {
    this.idetiProdukta("pienas", kiekis);
    return this;
  }
  idetiDuonos(kiekis) {
    this.idetiProdukta("duona", kiekis);
    return this;
  }
  krepselioTurinys() {
    console.log("krepselio turinys:");
    this.turinys.forEach((kiekis, pavadinimas) => {
      console.log(`${pavadinimas}: ${kiekis}`);
    });
  }
}

const manoPirkiniai = new PirkiniuKrepselis();
manoPirkiniai
  .idetiPieno(2)
  .idetiSureli(3)
  .idetiDuonos(5)
  .idetiSureli(1)
  .krepselioTurinys();

// class PirkiniuKrepselis{
//     constructor(){
//         this.turinys = new Map();
//     }
//     idetiSureli(kiekis){
//         this.turinys.set("surelis", (this.turinys.get("surelis") || 0) + kiekis );
//     }
//     idetiPieno(kiekis){
//         this.turinys.set("pienas", (this.turinys.get("pienas") || 0) + kiekis );
//     }
//     idetiDuonos(kiekis){
//         this.turinys.set("duona", (this.turinys.get("duona") || 0) + kiekis );
//     }
//     krepselioTurinys(){
//         console.log("Krepselio turinys yra: ", this.turinys);
//     }
// }

//7. (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti metodą akmenuSkaiciusVisuoseKibiruose(),
//kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose).
//Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, naudokite statinę savybę visiAkmenys
//(kurioje yra įrašytas ir saugomas bendras akmenų skaičius). Taip pat atitinkamai modifikuokite metodus
//prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).

class Kibiras1 {
  static visiAkmenys = 0;

  constructor(name) {
    this.akmenuKiekis = 0;
    this.name = name;
  }

  prideti1Akmeni() {
    this.akmenuKiekis++;
    this.constructor.visiAkmenys++;
  }
  
  pridetiDaugAkmenu(kiekis) {
    this.akmenuKiekis += kiekis;
    this.constructor.visiAkmenys += kiekis;
  }
  kiekPririnktaAkmenu() {
    console.log(this.name + " pririnko sitiek: " + this.akmenuKiekis);
  }

  static akmenuSkaiciusVisuoseKibiruose() {
    console.log(
      "Bendras akmneu skaicius visuose kibiruose: " +
        this.constructor.visiAkmenys
    );
  }
}

const pirmasKibiras = new Kibiras1("Jonas");
const antrasKibiras = new Kibiras1("Petras");

pirmasKibiras.prideti1Akmeni();

pirmasKibiras.pridetiDaugAkmenu(5);

pirmasKibiras.kiekPririnktaAkmenu();

antrasKibiras.prideti1Akmeni();
antrasKibiras.kiekPririnktaAkmenu();

Kibiras1.akmenuSkaiciusVisuoseKibiruose();
