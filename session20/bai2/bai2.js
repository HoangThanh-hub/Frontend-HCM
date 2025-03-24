let number = Number(prompt("Nhập 1 số nguyên bất kì"));


if (!isNaN(number) && number > 0){
    console.log(`các số chia hết cho 5 từ 1 đến ${number} là: `);
    for (let i =1 ; i <= number ; i++){
        if ( i % 5 == 0){
            console.log(`${i} `);
            
        }
    }
    
    
}else{
    console.log("dữ liệu nhập vào không hợp lệ");
    
}