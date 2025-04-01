let num = [];

for(let i = 0; i < 10; i++){
    num.push(+prompt(`Nhập phần tử thứ ${i + 1}`));
}

console.log(num);

let mangChan = num.filter((number) => number % 2 == 0);
let mangLe = num.filter((number) => number % 2 !== 0);

let tongChan = mangChan.reduce((sum, num) => sum + num, 0);
let tongLe = mangLe.reduce((sum, num) => sum + num, 0);

console.log(`Tổng số chẵn trong mảng là ${tongChan}`);
console.log(`Tổng số lẻ trong mảng là ${tongLe}`);
