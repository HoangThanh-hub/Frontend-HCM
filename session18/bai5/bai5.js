let year = Number(prompt("nhập số năm kinh nghiệm"));

console.log(`kinh nghiệm ${year} năm`);


if(year > 6){
    console.log("Xếp loại: Quản lý");
}else{
    if(year >=4 && year<=6){
        console.log("Xếp loại: Chuyên viên");
    }else{
        if(year >=1 && year<=3){
            console.log("Xếp loại: Nhân viên có kinh nghiệm");
        }else{
            if(year < 1){
                console.log("Xếp loại: Mới vào nghề");
            }
        }
    }
}