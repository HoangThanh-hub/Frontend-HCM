let number = prompt("Nhập vào 1 dãy số ");

if(!isNaN(number)){
    let arr = number.split("");
    let maxNum = arr[0];
    for (let index of arr){
        if(arr[index] > maxNum){
            maxNum = arr[index];
        }
    }
    console.log(`${maxNum} là số lớn nhất trong dãy số`);
    
}else{
    console.log("Dãy không hợp lệ");
    
}
