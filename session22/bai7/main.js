let number = prompt("Nhập vào 1 dãy số (10 số)");

if(!isNaN(number) && number.length ===10){
    let arr = number.split("");
    console.log(arr);
    for (let i = 0; i < arr.length - 1; i++) {  
        for (let j = 0; j < arr.length - 1 - i; j++) {  
            if (arr[j] > arr[j + 1]) { 
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
   
     console.log(arr);
     

       
}else{
    console.log("Dãy không hợp lệ");
}