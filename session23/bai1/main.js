let numbers = [];

for(let i = 0 ; i < 10 ; i++){
    numbers.push(prompt(`Nhập số thứ ${i + 1}:`));
}

console.log(numbers);
let check = 0;
for(let i= 0; i < numbers.length ; i++){
    if(numbers[i] >= 10){
        console.log(numbers[i]);
        check++;
    }
}

if(check === 0){
    console.log("Không có số nào lớn hơn 10");
}
