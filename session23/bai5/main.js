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
    let check = 0
    let sum = 0;
    for(let i = 0 ; i<n ; i++) {
        if(!isNaN(Number(numbers[i]))){
            sum += Number(numbers[i]);
            check++;
        }
    }
    if(check == 0){
        console.log("không có kí tự số");
    }else{
        console.log(`Tổng các kí tự số là: ${sum}`);

    }
    
}