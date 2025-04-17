const employees = [
    { name: 'Nguyễn Văn A', position: 'Developer' },
    { name: 'Trần Thị B', position: 'Designer' },
    { name: 'Phạm Văn C', position: 'Project Manager' },
    { name: 'Lê Văn D', position: 'Tester' },
    { name: 'Hoàng Thị E', position: 'HR' },
    { name: 'Vũ Văn F', position: 'BA' },
    { name: 'Đỗ Thị G', position: 'Scrum Master' },
    { name: 'Ngô Văn H', position: 'DevOps' }
];
const rowsPerPage = 3;
let currentPage = 1;

function displayEmployees() {
    const tableBody = document.getElementById('employeeTableBody');
    tableBody.innerHTML = '';
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedItems = employees.slice(start, end);
    paginatedItems.forEach((emp, index) => {
        const row = `<tr>
        <td>${start + index + 1}</td>
        <td>${emp.name}</td>
        <td>${emp.position}</td>
      </tr>`;
        tableBody.innerHTML += row;
    });
    updatePagination();
}
function updatePagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    const totalPages = Math.ceil(employees.length / rowsPerPage);
    const prevBtn = `<button ${currentPage === 1 ? 'disabled' : ''} onclick="goToPage(${currentPage - 1})">Previous</button>`;
    pagination.innerHTML += prevBtn;
    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `<button class="${currentPage === i ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
    }
    const nextBtn = `<button ${currentPage === totalPages ? 'disabled' : ''} onclick="goToPage(${currentPage + 1})">Next</button>`;
    pagination.innerHTML += nextBtn;
}
function goToPage(page) {
    currentPage = page;
    displayEmployees();
}
function addEmployee() {
    const name = document.getElementById('nameInput').value.trim();
    const position = document.getElementById('positionInput').value.trim();
    if (name && position) {
        employees.push({ name, position });
        document.getElementById('nameInput').value = '';
        document.getElementById('positionInput').value = '';
        goToPage(Math.ceil(employees.length / rowsPerPage)); 
    } else {
        alert('Vui lòng nhập đầy đủ thông tin.');
    }
}
displayEmployees();