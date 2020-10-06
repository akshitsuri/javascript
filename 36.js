var x = require("faker");
console.log("====================");
console.log("WELCOME TO MY SHOP!");
console.log("====================")
for (var i = 0; i < 10; i++) {
    var p = x.commerce.productName();
    var m = x.commerce.price();

    console.log(p + " - $" + m);

}