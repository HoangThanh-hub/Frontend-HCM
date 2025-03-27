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
    
    for (let i = 0; i < numbers.length - 1; i++) {  
        for (let j = 0; j < numbers.length - 1 - i; j++) {  
            if (Number(numbers[j]) > Number(numbers[j + 1])) { 
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    console.log("Phần tử lớn thứ 2 trong mảng là: "+numbers[numbers.length-2]);
    
    
}