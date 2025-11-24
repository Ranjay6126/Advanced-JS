
console.log("Start")

setTimeout(function cb(){
    console.log("Callback function is called")
},5000)

console.log("End")

// million of lines of code that take  10 seconds to execute

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate - startDate < 10000) {
    endDate = new Date().getTime();
}
console.log("While loop ended")
