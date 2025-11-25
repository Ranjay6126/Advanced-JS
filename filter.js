const arr = [2,4,6,8,10,11,13,15];

function Even(n){
    return  n % 2 === 0;
}
const iseven = arr.filter(Even)
console.log(iseven); 

// const output = arr.filter((x)=> x > 4);