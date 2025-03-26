let number = prompt("Nhập vào 1 dãy số ");

if(!isNaN(number) ){
    let arr = number.split("");
    console.log(arr);
    
    let tongLe = 0;
    let tongChan = 0;
    for(let i in arr){
        if(arr[i] % 2 == 0){
            tongChan += Number(arr[i]);
        }else{
            tongLe += Number(arr[i]);
        }
    }
    console.log(`Tổng các số chẵn: ${tongChan}`);
    console.log(`Tổng các số lẻ: ${tongLe}`);

    
       
}else{
    console.log("Dãy không hợp lệ");
}