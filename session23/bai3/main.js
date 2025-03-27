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
    let count = 0;
    for(let i = 0 ; i<n ; i++) {
        if(parseFloat(numbers[i]) % 1 == 0 && numbers[i] < 0){
            count++;
        }
    }
    console.log(count);
    
}


