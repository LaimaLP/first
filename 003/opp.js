console.log("labas");

class Movie {}

const terminator = new Movie();

const arr1 = [];
const arr2 = new Array();

class Box {
  constructor() {
    this.item = ""
  }
  put(what) {
    this.item = what
  }
  empty(){
    this.item = "";
  }
}
const box1 = new Box();
const box2 = new Box();

box1.put("pen")
box2.put("pencil")
box1.put("eraser")

box1.empty()
box2.empty()


console.log(box1, box2)

class RandomDigit{
    constructor(){
        this.digit = this.random(0,9);
       
    }
random(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
    }
}
const randomDigit1 = new RandomDigit();
const randomDigit2 = new RandomDigit();

console.log(randomDigit1)
console.log(randomDigit2)


// let arr = [];
// while(arr.length<10){
// arr.push( new RandomDigit())
// }

console.log("arr", arr)

let arr3 = new Array(10)
.fill(null)
.map(_ => new RandomDigit() )
.map(el => console.log(el.digit) || el.digit);

console.log("arr3", arr3)

