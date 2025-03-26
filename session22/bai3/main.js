let number = prompt("Nhập vào 1 dãy số ");

if(!isNaN(number)){
    let arr = number.split("");
    arr.reverse();
    console.log(arr.join(""));
    
}else{
    console.log("Dãy không hợp lệ");
    
}
