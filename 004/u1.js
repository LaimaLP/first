console.log("labas");

class TV {
  static channels = ["LRT", "LNK", "TV3", "Polonia", "TV1", "Animal"];
  static listChannels() {
    console.log("Available channels:");
    for (const channel of this.channels) {
      console.log(channel);
    }
  }

  constructor(brand, owner) {
    this.brand = brand;
    this.owner = owner;
  }
  changeChannel(number) {
    console.log("Changing channel..." + this.constructor.channels[number]);
  }



  
}
const petras = new TV("Samsung", "Petras");
const maryte = new TV("LG", "Maryte");
const bebras = new TV("Sony", "Bebras");

petras.changeChannel(2);
maryte.changeChannel(3);
bebras.changeChannel(5);
const newChannels = ["MTV", "VH1", "Fox", "BBC", "NK", "BK"];

TV.channels = newChannels;
petras.changeChannel(2);
maryte.changeChannel(3);
bebras.changeChannel(5);
TV.listChannels();
