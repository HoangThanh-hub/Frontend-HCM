let number = prompt("Nhập vào 1 dãy số (10 số)");

if(!isNaN(number) && number.length ===10){
    let arr = number.split("");
    let maxCount = 0, count = 0, num = 0;
        for (let i = 0; i < arr.length ; i++) {
            let key = arr[i];
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] === key) {
                    count++;
                }
            }
            if (count > maxCount) {
                num = key;
                maxCount = count;
            }
            if (count == maxCount && num > key) {
                num = key;
            }
            count = 0;
        }
        console.log(num);
     

       
}else{
    console.log("Dãy không hợp lệ");
}