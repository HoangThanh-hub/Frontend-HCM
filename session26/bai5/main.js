let num = [];

for(let i = 0; i < 10; i++){
    num.push(+prompt(`Nhập phần tử thứ ${i + 1}`));
}

console.log(num);

let result = num.reduce((acc, num, index) => {
    return num > acc.max ? { max: num, index: index } : acc;
}, { max: num[0], index: 0 });

console.log(`Số lớn nhất trong mảng là: ${result.max}`);
console.log(`Vị trí của số đó trong mảng: ${result.index}`);
