let number = prompt("Nhập vào 1 dãy số (10 số)");

if(!isNaN(number) && number.length ===10){
    let arr = number.split("");
    let arr2 = [];
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        for (let j = 0; j < arr2.length; j++) {
            if (arr[i] === arr2[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            arr2.push(arr[i])
        }
    }
    for (let i = 0; i < arr2.length - 1; i++) {  
        for (let j = 0; j < arr2.length - 1 - i; j++) {  
            if (arr2[j] > arr2[j + 1]) { 
                let temp = arr2[j];
                arr2[j] = arr2[j + 1];
                arr2[j + 1] = temp;
            }
        }
    }
    console.log(arr2);
    
     

       
}else{
    console.log("Dãy không hợp lệ");
}