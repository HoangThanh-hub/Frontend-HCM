function maxNum(num) {
    num = num.toString().split("");
    let sortNum = num.sort((a, b) => Number(b) - Number(a));
    sortNum = sortNum.join("")
    return sortNum;
}

console.log(maxNum(2941));
console.log(maxNum(3875));