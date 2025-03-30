function checkDoiXung(str) {
    let reversedStr = str.split("").reverse().join(""); 
    return str === reversedStr ? "là chuỗi đối xứng" : "không phải chuỗi đối xứng";
}

console.log(checkDoiXung("hello"));
console.log(checkDoiXung("aloola"));
console.log(checkDoiXung("12345"));
