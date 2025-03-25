let sum =0;

for(let i =1; i <= 5;i++){
    let a = +prompt(`Nhập số nguyên thứ ${i}:`)
    if(a % 2 !== 0){
        sum += a;
    }
}
console.log(`Tổng các số lẻ là: ${sum}`);
