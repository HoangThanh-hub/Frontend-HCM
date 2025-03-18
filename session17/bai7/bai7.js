let money = prompt("Nhập số tiền: ");

money = Number(money);

let changeMoney = money.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

document.writeln(changeMoney);
