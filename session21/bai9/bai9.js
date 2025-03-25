let n = Number(prompt("Mời bạn nhập vào một số: "));
if (isNaN(n) || n <= 1) {
  alert("Vui lòng nhập số lớn hơn 1");
} else {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${n} là số nguyên tố`);
  } else {
    console.log(`${n} không phải là số nguyên tố`);
  }
}