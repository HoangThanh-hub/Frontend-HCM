let tienGoc = +prompt("Nhập số tiền muốn gửi: ");
let laiSuat = +prompt("Nhập lãi suất: (%)");
let month = +prompt('Nhập số tháng gửi:');
let tongTienLai = 0;
let tienLai;

for(let i=1; i <= month ; i++){
    tienLai = tienGoc * (laiSuat/100);
    tienGoc += tienLai;
    tongTienLai += tienLai;
}
console.log(`Số tiền lãi: ${tongTienLai}`);

console.log(`Số tiền nhận được: ${tienGoc}`);
