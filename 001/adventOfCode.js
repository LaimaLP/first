
let file = "input.txt";

fetch(file)
  .then((x) => x.text())
  .then((y) => start1Task(y));


function start1Task(value) {
  let inputValue = "";
  inputValue = value.toString().toLowerCase();
  let arr = inputValue.split("\n");


console.log("value vvvv", arr)
  let allValidNumber = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let twoDigitsArr = [];
  let sum = 0;
  for (let item of arr) {
    console.log('Itemas: ', item)
    let textas = "";
    for (let j in item) {

      textas = textas + item[j]; // nkj8 + item[j]

      for (let i = 0; i < allValidNumber.length; i++) {
        if (textas.includes(allValidNumber[i])) {
          textas = textas.replace(allValidNumber[i], i + 1)
          textas += (item[j]); //nkjeight -> nkj8
        }
      }
    }

    let arrNumber = [];
    for (let i = 0; i < textas.length; i++) {
      if (Number.isInteger(parseInt(textas[i]))) {
        arrNumber.push(textas[i].toString());
      }
    }
    twoDigitsArr.push(arrNumber[0].toString() + arrNumber[arrNumber.length - 1].toString());
  }
  console.log("twoDigitsArr", twoDigitsArr);
  for (const item of twoDigitsArr) {
    sum += +item;
  }
  console.log("sumaaaaaaaaa", sum);


}
  //54170
  //476549
  //24485
  //9094
  //24719


  //54678
//54676

console.log("veikia")
  let test = "laima"
  if(test.includes("ai")){
    test = test.replace("ai", "uu")
  }
  console.log(test)