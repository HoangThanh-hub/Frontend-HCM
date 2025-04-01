let users = [];

function registerEmail(email) {
    if (!email.includes("@") || !(email.endsWith(".com") || email.endsWith(".vn"))) {
        console.log("Email không hợp lệ!");
        return;
    }

    if(users.includes(email)
    ){
      console.log("tk da ton tai r");
    }else{
        users.push(email);
        console.log(" b da them thanh cong")
    }
}
registerEmail("test@example.com");
registerEmail("test@example.com"); 
registerEmail("invalidemail");