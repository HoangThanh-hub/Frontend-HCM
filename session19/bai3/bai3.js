let choice = parseFloat(prompt("Nhập lựa chọn của bạn (1. VND -> USD)(2.USD -> VND)"));

switch(choice) {
    case 1:
        let vnd = parseFloat(prompt("nhập số tiền muốn đổi:"));
        console.log(`${vnd} VND = ${vnd/23000} USD`);
        break;
    case 2:
        let usd = parseFloat(prompt("nhập số tiền muốn đổi:"));
        console.log(`${usd} USD = ${usd*23000} VND`);
        break;
}