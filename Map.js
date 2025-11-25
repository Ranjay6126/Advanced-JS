const arr = [1, 2, 3, 4, 5];

function double(x){
    return x * 2;
}

const doub = arr.map(double);
console.log(doub);

console.log(arr);

// ------------------

function triple(y){
    return y * 3;
}

const trip = arr.map(triple)

console.log(trip);


//into the binary //

const binary = (n)=>{
    return n.toString(2);
}

const bin = arr.map(binary);
console.log(bin);



// Higher Order Function Example// drictly in to the map 

const higher = arr.map((n)=>{
    return n.toString(2);
})

console.log(higher);

const higher1 = arr.map(function n(x){
    return x * x;
});

console.log(higher1);