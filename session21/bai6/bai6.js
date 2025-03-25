let number = +prompt("Mời bạn 1 số nguyên bất kì: ");

for(let i = 0 ; i <= number ; i++){
    if(number % i === 0){
        console.log(i);
    }
}