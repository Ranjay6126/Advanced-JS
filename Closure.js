/*function x(){
    var a =7;

    function y(){
        console.log(a);
    }
    a = 100; 

    return y;   
}
var z = x();
console.log(z);
//......
z(); */





// function z() {
//   var a = 700;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a);
//     }
//     y();
//   }
//   x();
// }
// z();


// function x(){
//  var i=7;
// setTimeout(function () {
// console.log(i);
// }, 4000);
// console.log("Namaste js");
// }
// x();


function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste js")
}

x();
