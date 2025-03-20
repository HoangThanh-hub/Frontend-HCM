let a = prompt("Hãy nhập gì đó:");  
let check = Number(a)




if( a.length !== 1 || !isNaN(check)){
    console.log(`${a} không phải là chữ cái`);
}else{
    console.log(`ký tự ${a} là chữ cái`);
}