let arr = [];

for(let i = 0; i < 5; i++){
    arr.push(prompt(`Nhập chuỗi cho phần tử thứ ${i + 1}`));
}

console.log(arr);

let strBigFive = arr.filter((string) => string.length > 5)

if(strBigFive.length == 0){
    console.log("Không có phần tử nào lớn hơn 5 kí tự");
}else {
    console.log("Các phần tử lớn hơn 5 kí tự trong mảng là:");
    console.log(strBigFive);
    
    
}