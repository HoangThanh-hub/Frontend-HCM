function checkArr (arr) {
    let key = arr[1] - arr[0];
    let check = true;
    for (let i = 1; i < arr.length-1; i++) {
        if (arr[i+1] - arr[i] !== key) {
            check = false;
        }
    }
    return check;
}

console.log(checkArr([2,4,6,8])?"TRUE":"FALSE")
console.log(checkArr([3,6,9,12,14])?"TRUE":"FALSE")