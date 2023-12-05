console.log("test");

//5 (MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas.
//Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(),
//kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus,
//tokiu atveju produktų kiekis turėtų sumuotis.

class PirkiniuKrepselis {
  constructor() {
    this.turinys = new Map();
  }
  idetiProdukta(pavadinimas, kiekis){
    if(this.turinys.has(pavadinimas)){
        this.turinys.set(pavadinimas, this.turinys.get(pavadinimas)+kiekis);
    }else{
        this.turinys.set(pavadinimas, kiekis)
    }
  }
  idetiSureli(kiekis) {
    this.idetiProdukta("surelis", kiekis)
    return this
    
  }
  idetiPieno(kiekis) {
    this.idetiProdukta("pienas", kiekis)
    return this
    
    
  }
  idetiDuonos(kiekis) {
    this.idetiProdukta("duona", kiekis)
    return this

  }
  krepselioTurinys(){
    console.log("krepselio turinys:")
    this.turinys.forEach((kiekis, pavadinimas)=>{
        console.log(`${pavadinimas}: ${kiekis}`)
    });
  }
}

const manoPirkiniai = new PirkiniuKrepselis;
manoPirkiniai.idetiPieno(15).idetiSureli(7).idetiDuonos(5).idetiSureli(1).krepselioTurinys()
