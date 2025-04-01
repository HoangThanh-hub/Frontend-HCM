let arr = [];

for(let i = 0; i < 5; i++){
    arr.push(prompt(`Nhập email cho phần tử thứ ${i + 1}`));
}

console.log(arr);

let checkEmail = arr.filter((str) => str.includes("@") && !str.includes(" "));

if(checkEmail.length == 0){
    console.log("Không có email hợp lệ");
}else {
    console.log("Các email hợp lệ là trong mảng là:");
    console.log(checkEmail);
    
    
}