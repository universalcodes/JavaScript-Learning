console.log("E Kart");

var totalProducts = 10;

var gotOneOrder = totalProducts - 5;

var orderCancelled = totalProducts;

var orderDispatched = totalProducts - gotOneOrder;

var returnedOneOrder = orderDispatched - 1;

var bulkBuyQuantity = 1 * 10 + totalProducts;
var totalNewProduct = bulkBuyQuantity;

var purchasePrice = 2;
var totalPurchasePrice = purchasePrice * totalNewProduct;

var sellPrice = 4;
var profit = sellPrice - purchasePrice;

console.log("Total Products:", totalProducts);
console.log("Got One Order:", gotOneOrder);
console.log("Order Dispatched:", orderDispatched);
console.log("Returned Order:", returnedOneOrder);
console.log("Total New Product:", totalNewProduct);
console.log("Total Purchase Price:", totalPurchasePrice);
console.log("Profit Per Product:", profit);