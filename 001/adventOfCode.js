
let file = "input.txt";

fetch(file)
  .then((x) => x.text())
  .then((y) => start1Task(y));


function start1Task(value) {
  let inputValue = "";
  inputValue = value.toString();
  let arr = inputValue.split("\n");

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
    let textas = "";
    for (let j in item) {

      textas = textas + item[j]; // nkj8 + item[j]

      for (let i = 0; i < allValidNumber.length; i++) {
        if (textas.includes(allValidNumber[i])) {
          textas = textas.replace(allValidNumber[i], i + 1); //nkjeight -> nkj8
        }
      }
    }

    item = textas;
    let arrNumber = [];
    for (let i = 0; i < item.length; i++) {
      if (Number.isInteger(parseInt(item[i]))) {
        arrNumber.push(item[i]);
      }
    }

    twoDigitsArr.push(arrNumber[0] + arrNumber[arrNumber.length - 1]);
  }
  console.log("twoDigitsArr" , twoDigitsArr)
  for (const item of twoDigitsArr) {
    sum += parseInt(item);
  }
  console.log("sumaaaaaaaaa", sum);


}
  //54170
  //476549
  //24485
  //9094
  //24719


  //54678


console.log("veikia")
  let test = "laima"
  if(test.includes("ai")){
    test = test.replace("ai", "uu")
  }
  console.log(test)