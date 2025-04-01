let num = [];

for(let i = 0; i < 10; i++){
    num.push(+prompt(`Nhập phần tử thứ ${i + 1}`));
}

console.log(num);

let double = num.map((value) => value * value)

console.log("Mảng sau khi bình phương: " +double);

let soChan = double.filter((value) => value % 2 == 0)

if(soChan.length == 0){
    console.log("Không có số chẵn!");
}else{
    console.log('giá trị là số chẵn sau khi bình phương là:' +soChan);
    
}

