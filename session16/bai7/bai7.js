let math = prompt("nhập điểm toán: ");
let physics = prompt("nhập điểm lí: ");
let chemistry = prompt("nhập điểm hoá: ");

let tb = ((parseFloat(math)) + (parseFloat(physics)) +(parseFloat(chemistry))) /3;

document.writeln("Điểm trung bình là: " + tb);