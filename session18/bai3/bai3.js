let login = prompt("Nhập tên đăng nhập: ");

if(login === "ADMIN"){
    let password = prompt("Nhập mật khẩu:");
        if( password === "TheMaster"){
            console.log("Welcome");
        }else{
            if(password != null){
                console.log("Wrong password");
            }else{
                console.log("Cancelled");
            }
        }
}else{
    if(login != null){
        console.log("I Don’t know you");
    }else{
        console.log("Cancelled");
    }
}