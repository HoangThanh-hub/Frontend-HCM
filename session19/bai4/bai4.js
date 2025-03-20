let x = Number(prompt("Nhập 1 số:"));

if(x % 3 == 0 && x % 5 == 0){
    console.log(`${x} chia hết cho cả 3 và 5`);    
} else{
    console.log(`${x} không chia hết cho cả 3 và 5`);
}