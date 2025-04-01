function isPrime(n) {
    if (n < 2) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) { 
        if (n % i === 0) return false; 
    }
    return true;
}

let num = [];

for(let i = 0; i < 10; i++){
    num.push(prompt(`Nhập phần tử thứ ${i + 1}`));
}

console.log(num);

let primeNumbers = num.filter(isPrime);

if(primeNumbers.length == 0){
    console.log("Không có số nguyên tố nào trong mảng");
}else {
    console.log("Các số nguyên tố trong mảng là:");
    console.log(primeNumbers);
    
    
}