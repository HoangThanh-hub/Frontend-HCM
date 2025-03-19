let a = Number(prompt("Nhập độ dài cạnh a"));
let b = Number(prompt("Nhập độ dài cạnh b"));
let c = Number(prompt("Nhập độ dài cạnh c"));

if(a+b>c && a+c>b && b+c>a){
    if(a==b && a==c){
        console.log("3 cạnh trên là 1 tam giác đều");
    }else{
        if(a==b || a==c || c==b){
        console.log("3 cạnh trên là 1 tam giác cân");
        }else{
            if(a*a + b*b == c*c || a*a + c*c == b*b ||c*c + b*b == a*a){
            console.log("3 cạnh trên là 1 tam giác vuông");
            } else {
                console.log("3 cạnh trên là 1 tam giác thường");
            }
        }
    }
}else{
    console.log("3 cạnh trên không thể tạo ra 1 tam giác");
    
}