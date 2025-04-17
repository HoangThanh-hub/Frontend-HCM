let categories = [
    { code: 'DM001', name: 'Quần áo', status: 'active' },
    { code: 'DM002', name: 'Kính mắt', status: 'inactive' },
    { code: 'DM003', name: 'Giày dép', status: 'active' },
    { code: 'DM004', name: 'Thời trang nam', status: 'inactive' },
    { code: 'DM005', name: 'Thời trang nữ', status: 'inactive' },
    { code: 'DM006', name: 'Hoa quả', status: 'inactive' },
    { code: 'DM007', name: 'Rau', status: 'active' },
    { code: 'MD008', name: 'Điện thoại', status: 'inactive' },
];
function renderTable() {
    const table = document.getElementById('categoryTable');
    const search = document.getElementById('searchInput').value.toLowerCase();
    const filter = document.getElementById('statusFilter').value;
    table.innerHTML = '';
    categories
        .filter(cat =>
            (filter === 'all' || cat.status === filter) &&
            cat.name.toLowerCase().includes(search)
        )
        .forEach(cat => {
            const row = document.createElement('tr');
            row.innerHTML = `
          <td>${cat.code}</td>
          <td>${cat.name}</td>
          <td><span class="status-tag ${cat.status === 'active' ? 'active' : 'inactive'}">
            ${cat.status === 'active' ? 'Đang hoạt động' : 'Ngừng hoạt động'}
          </span></td>
          <td class="actions">
            <button onclick="deleteCategory('${cat.code}')">xoá</button>
            <button onclick="editCategory('${cat.code}')">sửa</button>
          </td>
        `;
            table.appendChild(row);
        });
}
function deleteCategory(code) {
    if (confirm('Bạn có chắc muốn xóa danh mục này?')) {
        categories = categories.filter(cat => cat.code !== code);
        renderTable();
    }
}
function editCategory(code) {
    const cat = categories.find(c => c.code === code);
    const newName = prompt('Sửa tên danh mục:', cat.name);
    if (newName) {
        cat.name = newName;
        renderTable();
    }
}
function addCategory() {
    const code = prompt('Nhập mã danh mục:');
    if (!code) return;
    const name = prompt('Nhập tên danh mục:');
    if (!name) return;
    const status = confirm('Trạng thái là Đang hoạt động?') ? 'active' : 'inactive';
    categories.push({ code, name, status });
    renderTable();
}
renderTable();