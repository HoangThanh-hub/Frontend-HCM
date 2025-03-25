let soLe =0;
let soChan =0;

for(let i =1; i <= 5;i++){
    let a = +prompt(`Nhập số nguyên thứ ${i}:`)
    if(a % 2 !== 0){
        soLe++;
    }else{
        soChan++
    }
}
console.log(`Số lượng các số lẻ là: ${soLe}`);
console.log(`Số lượng các số chẵn là: ${soChan}`);
