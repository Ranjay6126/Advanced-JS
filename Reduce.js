


const arr = [5,1,3,2,6];

//normal sum function

function sum(a,b){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
    sum = sum + arr[i];
    }
    return sum;
}


const output = arr.reduce(function(acc,curr){

    acc = acc + curr;
    return acc;

},0);

console.log(output);

// ------------------------------------------------
// normal max function

function max(){
    
}