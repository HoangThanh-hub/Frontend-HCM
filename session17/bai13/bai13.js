let money = parseFloat(prompt("Nhập số tiền gửi (VNĐ):"));
let months = parseInt(prompt("Nhập số tháng gửi:"));

let tax = 0.043 / 12;

let tienLoi = money * tax * months;
let sum = money + tienLoi;

document.writeln(`Số tiền lãi nhận được: ${tienLoi.toLocaleString("vi-VN")} VNĐ\nTổng số tiền sau ${months} tháng: ${sum.toLocaleString("vi-VN")} VNĐ`);