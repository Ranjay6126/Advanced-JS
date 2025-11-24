// function x(callback) {
//     console.log("Namaste Ranjay");
//     callback();  // calling the function passed as argument
// }



// function y() {
//     console.log("Hello JS, I am a Higher Order Function Passed as Argument");
// }

// x(y); // passing function y as an argument




const greet = (parama) =>{
    parama();
    console.log("Greetings from greet function");

}

const Hello = ()=>{
    console.log("Hello Ranjay from Hello function");
}

greet(Hello);