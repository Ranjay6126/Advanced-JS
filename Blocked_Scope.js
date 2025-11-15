
//shadowing in js
// blocked in js

let b = 100;

{
    var a = 10;
    let b = 40;
    const c = 50
    console.log(a);
     console.log(b);
      console.log(c);
}
 console.log(a);
  console.log(b);
//    console.log(c);
console.log("OK"); 