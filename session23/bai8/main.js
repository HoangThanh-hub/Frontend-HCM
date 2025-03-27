let numbers = [];

let n = +prompt("Nhập số n: ")

if(n==0){
    console.log('Mảng không có phần tử' );
}else if(n < 0){
    console.log("Số lượng phần tử không hợp lệ");
}else{
    for(let i = 0 ; i < n ; i++){
        numbers.push(prompt(`Nhập số thứ ${i + 1}:`));
    }
    
    console.log(numbers);
    let check = 1;
    if(numbers[0] == 0 && numbers[1] == 1){
        for(let i = 2 ; i < n; i++){
            if (Number(numbers[i]) !== Number(numbers[i-1]) + Number(numbers[i-2])){
                check = 0;
                break;
            }
        }
        if(check == 1){
            console.log("Là dãy số fibonacci");
        }else{
            console.log("Không phải dãy số fibonacci");
        }

    }else{
        console.log("Không phải dãy số fibonacci");
    }
    
    
}