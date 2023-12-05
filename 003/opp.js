console.log("labas");

class Movie {
  constructor(title){
    this.title = title;
    console.log("Movie constructor");
  }
  show(){
    console.log("Show movie " + this.title);
  }
}

const terminator = new Movie("Terminator");
const matrix = new Movie ("Matrix");

terminator.show();
matrix.show();

// const terminatorWhat = {};

// const arr1 = []; // short hand for new Array();
// const arr2 = new Array();

// const array1 = [];
// const array2 = {};


class Box {
  constructor() {
    this.item, 
    this.svoris;
  }
  put(a) {
    this.item = a;
  }
  empty() {
    this.item = "";
  }
}
const box1 = new Box();
box1.put([4,7,6])
const box2 = new Box();

box1.put("pen");
box2.put("pencil");
box1.put("eraser");

box1.empty();
box2.empty();

console.log(box1, box2);
class RandomDigit {

  constructor() {
    this.digit = this.random(0, 9);
  }
  random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
}
const randomDigit1 = new RandomDigit();
const randomDigit2 = new RandomDigit();

console.log(randomDigit1);
console.log(randomDigit2);

// Sukurti masyvą iš 10 RandomDigit objektų ir atspausdinti visus skaičius
console.log("hhhhhhhhhhhhhhhhhhhhh")
let arr = [];
while(arr.length<10){
arr.push( new RandomDigit())
}

arr.forEach(element => {
    console.log("arr su while gautas", element.digit);
});

// console.log("arr", arr);

let arr3 = new Array(10)
  .fill(null)
  .map(_ => new RandomDigit())
  .map(el => console.log(el.digit) || el.digit);

console.log("arr3", arr3);
