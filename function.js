// Function in  js



// function define
// function Myname(){
//     console.log("Ranjay Prajapati");
// }
// // fuction call//
// Myname();


// function count(){
//     for(let i=0; i<30; i++){
//         console.log(`Counting${i}`);
//     }
// }

// count();








// // function with parameter

// function PrintNumber(num){
//     console.log("Printing Number is:",num);
// }
// PrintNumber(5); // Argument 


// function Copy(a, b){
//     sum = a + b;
//     console.log(sum);
// }

// Copy(2,3)



// function getAverage(num1, num2){
//     Average = (num1 + num2) / 2;
//     console.log("The average of these 2 number is", Average);
// }
// getAverage(4,4);





// Return functions

// Return functions

/*
function sum(a, b, c){
   let Add = a+b+c;
    return Add;
}
let finall= sum(1,3,5);

console.log(finall);




function Name(firstName, LastName){

    let fullName = firstName +" "+LastName;
    return fullName;

}

let final = Name("Ranjay", "Prajapati")

console.log(final);


// Next fuction example is;

function Application(Mobile, Laptop){
    let concatenate = Mobile +" "+ Laptop;
    return concatenate;
}
let App = Application("Iphone", "Acer");
console.log(App);


// Next Example 

function subtract(a,b){
    return a-b;
    // Unreach able code // under the return statement
}
let sub = subtract(19,5);

console.log(sub); */




//Function Expression;

 const express = function(a,b){
    return a*b;
 }
 let ans = express(3,4);

 console.log(ans);




 // Arrow Function just remove the function and in that place => 

// expresion funciton 
 let getExp = function (x,y){ 
    return x**y;
}
let power = getExp(3,3);

console.log(power);



// Arrow function

let getExps= (x,y) =>{
    return x**y;
}
let powers= getExps(10,2)

console.log(powers);



// using arrow function sum of a+b;


let sum = (a,b) =>{
    return a+b;
}
let add = (25+25);
console.log(add);


let conct =(a,b) =>{
    return a + " " +b;
}
let adding = conct("Sita","Rama");

console.log(adding);