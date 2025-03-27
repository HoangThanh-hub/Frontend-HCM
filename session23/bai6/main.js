let arr1 =["JavaScript", 0, null, true, 7, " "];

let arr2 = [];

for(let i = 0; i < arr1.length; i++){
    if(Boolean(arr1[i]) == true){
        arr2.push(arr1[i])
    }
}
console.log(arr2);
