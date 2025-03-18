let a = Number(prompt("nhập số:")); 
let result = Number.isInteger(Math.sqrt(a))
    ? `${a} là số chính phương`
    : `${a} không phải là số chính phương`;
document.writeln(result);