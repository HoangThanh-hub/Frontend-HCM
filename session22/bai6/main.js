let number = prompt("Nhập vào 1 dãy số (10 số)");

if(!isNaN(number) && number.length ===10){
    let arr = number.split("");
    console.log(arr);
    let num = +prompt("Mời bạn nhập 1 số bất kì");
    let count = 0;
    for(let i in arr){
       if(num === Number(arr[i])){
        count++;
       }
    }
    if(count == 0){
        console.log(`Số ${num} không tồn tại trong mảng `);
    }else{
        console.log(`Số ${num} xuất hiện ${count} lần trong mảng `);
    }    

       
}else{
    console.log("Dãy không hợp lệ");
}