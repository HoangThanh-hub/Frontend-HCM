function isPrime(n) {
    if (n < 2) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) { 
        if (n % i === 0) return false; 
    }
    return true;
}

let num = [];

for(let i = 0; i < 10; i++){
    num.push(+prompt(`Nhập phần tử thứ ${i + 1}`));
}

console.log(num);

let numbers = num.filter((num) => isPrime(num) && num % 2 !== 0);

if(numbers.length == 0){
    console.log("Không có số nào thoả điều kiện trong mảng");
}else {
    console.log("Các số thoả điều kiện trong mảng là:");
    console.log(numbers);
    
    
}