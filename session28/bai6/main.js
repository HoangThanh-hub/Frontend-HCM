const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }


];

console.log(cart);

console.log("Tổng tiền trong giỏ hàng là: " +sumMoney(cart));


function sumMoney(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i].price * arr[i].quantity;
    }
    return sum;
}

