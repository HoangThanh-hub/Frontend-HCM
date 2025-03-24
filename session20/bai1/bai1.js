let number = Number(prompt("Nhập 1 số nguyên bất kì"));
let sum =0;

if (!isNaN(number) && number > 0){
    for(let i = 1; i <= number; i++){
        sum += i;
    }
    console.log("sum :" +sum);
    
}else{
    console.log("dữ liệu nhập vào không hợp lệ");
    
}