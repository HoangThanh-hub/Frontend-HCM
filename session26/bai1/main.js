let num = [];

for(let i = 0; i < 10; i++){
    num.push(prompt(`Nhập phần tử thứ ${i + 1}`));
}

console.log(num);

let numBigTen = num.filter((number) => number >= 10);

if(numBigTen.length == 0){
    console.log("Không có số nào lớn hơn 10");
}else {
    console.log("Các số lớn hơn 10 trong mảng là:");
    console.log(numBigTen);
    
    
}