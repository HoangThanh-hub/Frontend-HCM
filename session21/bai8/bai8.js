console.log("Các số Armstrong có 3 chữ số là:");

for (let number = 100; number <= 999; number++) {
    let hundred = Math.floor(number / 100); 
    let ten = Math.floor((number % 100) / 10);
    let one = number % 10; 

    let sum = Math.pow(hundred, 3) + Math.pow(ten, 3) + Math.pow(one, 3);

    if (sum === number) {
        console.log(number);
    }
}