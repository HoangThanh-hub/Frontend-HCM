function average(arr){
    let averageScore = arr.filter((item) => {
       return (item.scores.math + item.scores.english + item.scores.literature)/3 >= 8;
    })
    return averageScore;
}

let  students=[

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5} },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }

   ];

console.log(students);

console.log("sinh viên có điểm trung bình 3 môn >= 8 là: ", average(students));

