let arr=[2,5,7,4,1,8,6];

let a = +prompt("Mời bạn nhập 1 số:");

let check=0;

for(let index in arr){
    if(a === arr[index]) check = 1;
}

if(check === 1){
    console.log('Bingo');
}else{
    console.log('Chúc bạn may mắn lần sau!!');
    
}