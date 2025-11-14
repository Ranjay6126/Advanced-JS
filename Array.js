

// Reference Type => Object , function, Array






//Object : collectin of key value and pair;

/*let Obj1 = { Name: "Ranjay", Age: 24, weight: 65 };
 console.log(Obj1);*/


 /*
let info = {
  "Full Name ": "Ranjay prajapati",
  Age: 34,
  sex: "Male",
  Weight: 55,
  greet: function () {
    console.log("Hello Good Morining");
  }
};
console.log(info);
info.greet();

console.log(typeof info);


// Array in js

let arr = [1,2, 3,4,5];
console.log(arr);


// arrays constructor

let arraying = new Array(3,"Ram", true)
console.log(arraying);

console.log(typeof arr);
console.log(typeof arraying);

console.log(arraying[2]);
arraying.push("RANJAY");
console.log(arraying);
console.log(arr.unshift(0));
console.log(arr);


console.log(arr.slice(1,3));
console.log(arr);
*/

let splacing = [0,1,2,3,4,5];

// let speak = splacing.splice(2,2,'ram');

// console.log(speak); 
// console.log(splacing);

let slices = splacing.slice(2,3);
console.log(slices);
console.log(splacing);



let arr = [10,20,30]

let ansArray = arr.map((number)=>{
  return number*number;
})
console.log(ansArray);