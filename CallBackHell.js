

// console.log("Namste");

// setTimeout(function (){
//      console.log("Javascript");
// })

// console.log("Session 2");


// // 
const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {

  api.proceedToPayment(function () {

    api.showOrderSummary(function () {
        
      api.updateWallet();
    });
  });
});
