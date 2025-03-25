let checkPass = "thanh123";

let passWord = prompt("Mời bạn nhập mật khẩu");

let check =0;

if(passWord.length !== checkPass.length){
    console.log("Mật khẩu của bạn đã sai!!");
}else{
    for(let i=0; i<= checkPass.length; i++){
        if(passWord[i] === checkPass[i]){
            check++;
            if(check === checkPass.length){
                console.log("Bạn đã đăng nhập thành công");
            }
        }else{
            console.log("Mật khẩu của bạn đã sai!!");
            break;
        }
    }
}

