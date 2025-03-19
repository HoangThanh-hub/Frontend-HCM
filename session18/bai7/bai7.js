let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));

let phepTinh = prompt("Nhập các phép tính (+,-,*,/)");

let result;

switch(phepTinh) {
    case '+':
        result = a + b;
        break;
    case '-':
        result = a - b;
        break;
    case '*':
        result = a * b;
        break;
    case '/':
        result =  a / b ;
        break;
    default:
        result = "Phép toán không hợp lệ";
}

alert("Kết quả: " + result);
