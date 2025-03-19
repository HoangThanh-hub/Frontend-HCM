let toan = parseFloat(prompt("Nhập điểm toán:"));
let van = parseFloat(prompt("Nhập điểm văn:"));
let anh = parseFloat(prompt("Nhập điểm anh:"));

let tb = ((toan + van + anh) / 3).toFixed(1)

console.log("Điểm trung bình: " +tb);


if(tb >= 8){
    console.log("Học lực: giỏi");
}else{
    if(tb >=6.5 && tb<=7.9){
        console.log("Học lực: khá");
    }else{
        if(tb >=5.0 && tb<=6.4){
            console.log("Học lực: trung bình");
        }else{
            console.log("Học lực: yếu");
        }
    }
}