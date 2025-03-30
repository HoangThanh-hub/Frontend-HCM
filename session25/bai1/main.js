function findValueMin(arr){
    if(!Array.isArray(arr)){
        return("Giá trị không hợp lệ");
    }
    if(arr.length === 0){
        return "Mảng không chứa phần tử";
    }

    let minValue = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<minValue){
            minValue=arr[i];
        }
    }
    return `Phần tử nhỏ nhất trong mảng là ${minValue}`;
}

console.log(findValueMin([2,4,8,1,9]));
console.log(findValueMin([]));
console.log(findValueMin("abc"));
console.log(findValueMin([5,2,7,5,4]));