


// const arr = [5,1,3,2,6];

// //normal sum function

// function sum(a,b){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//     sum = sum + arr[i];
//     }
//     return sum;
// }


// const output = arr.reduce(function(acc,curr){

//     acc = acc + curr;
//     return acc;

// },0);

// console.log(output);

// // ------------------------------------------------
// // normal max function

// function max(){
    
// }


const arr = [1,3,4,5,6,7,8,9];

function sum(){
    let sum =0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

const output = sum();
console.log(output);

//reduce method

const result = arr.reduce(function(acc,cur){
    acc = acc + cur;
    return acc;
},0)
console.log(result);



// ------------------------------------------------
// normal max function


function max(){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }

    }
    return max;
}

const output2 = max();
console.log(output2);

// min function

function min(){
    let min = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }
        return min;
    }
}

const output3 = min();
console.log(output3);


// reduce method for max

const result2 = arr.reduce(function(max, curr){
    if(curr >max){
       max = curr;
    }
    return max;
},0)

console.log(result2);



const users = [
    {firstName: "harshit",lastName:"Yadav", age: 23},
    {firstName: "mohit",lastName:"sharma", age: 11},
    {firstName: "nitish",lastName:"kumar", age: 25},
    {firstName: "ankit",lastName:"gupta", age: 10},
]

// const oldest = users.map((x)=> x.firstName + " " + x.lastName);
// console.log(oldest);

const oldest = users.reduce(function(acc,curr){     
    if(acc[curr.age]){        

      acc[curr.age] = ++acc[curr.age];
    } else{
        acc[curr.age] = 1;
    }
    return acc;
     
},{})
console.log(oldest);



//filter //map with chaining 
// who age iṡless than 15

const ageLessThan25 = users.filter((x)=> x.age < 25).map((x)=>x.firstName);
console.log(ageLessThan25);