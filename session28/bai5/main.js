const company = {

    name: "RikkeiSoft",

    location: "Hà Nội",

    employees: [

        { name: "Nguyễn Văn Luận", position: "Developer" },

        { name: "Nguyễn Văn Hoàng", position: "Tester" },

        { name: "Hoàng Nam Cao", position: "Manager" }

    ]

};

console.log("Tên công ty: " +company.name);
console.log("Tên nhân viên 1: " +company.employees[0].name);
console.log("Tên nhân viên 2: " +company.employees[1].name);
console.log("Tên nhân viên 3: " +company.employees[2].name);
