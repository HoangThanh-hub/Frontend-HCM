let numbers = [];

for(let i = 0 ; i < 10 ; i++){
    numbers.push(prompt(`Nhập số thứ ${i + 1}:`));
}

console.log(numbers);

let maxNum = 0;
let maxIndex = 0;

for(let i = 0; i < numbers.length ; i++){
    if(Number(numbers[i]) > maxNum){
        maxNum = numbers[i];
        maxIndex = i;
    }
}

if(numbers.length == 0){
    console.log("Không có số lớn nhất!");
}else{
    console.log("Số lớn nhất: " +maxNum);
    console.log("Vị trí: " +maxIndex);
}
