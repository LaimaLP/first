const lst = [1,3,8,1,8]
// console.log(lst)
// function uniqueSum(lst){
//     const uniqArr = lst.filter(x => !lst.includes(x))
//    console.log(uniqArr)

// }

    let arr2 =[];
    for(item of lst){
        if(!arr2.includes(item)){
            arr2.push(item)
        }
    }
    console.log("arr2", arr2)
   return arr2.reduce((x,y)=>x+y)
  



const arr = [
  "labasone53",
  "tau",
  undefined,
  "two",
  "one",
  "sakau",
  "3",
  "three",
  5,
  11,
  null,
  "one",
  5,
];

const numbersInLetters = ["one", "two", "three", 1, 2, 3, 5];

arr.find()


const firstNumber = arr.find((element) => numbersInLetters.includes(element));


console.log("foundFirstNumber", firstNumber);

const foundLatsNumber = arr.reverse().find((item) => Number.isInteger(item));
// console.log("foundFirstNumber", foundFirstNumber);
console.log("foundLatsNumber", foundLatsNumber);

