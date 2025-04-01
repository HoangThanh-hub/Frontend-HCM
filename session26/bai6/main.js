let arr = [];

for(let i = 0; i < 3; i++){
    arr.push(prompt(`Nhập ngày tháng năm cho phần tử thứ ${i + 1} (YYYY-MM-DD)`));
}

console.log(arr);

let changeDate = arr.map((date) => {
    let newDate = new Date(date);
    return newDate.toLocaleString("vi-VN");
})

console.log(changeDate);