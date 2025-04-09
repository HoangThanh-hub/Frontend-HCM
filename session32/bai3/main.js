const form = document.getElementById('form');
const infor = document.getElementById('infor');

let subject = [];


form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    load();  
});

function load() {
   
    let sub = document.getElementById('sub').value;

   
    if (sub !== '') {
        subject.push(sub);
    }else {
        alert('tên môn học không được để trống!');
    }

    form.reset();

    display();
}

function display() {
    
    infor.innerHTML = '';

    
    subject.forEach((va, index) => {
        const li = document.createElement('li');
        li.innerText = `${index + 1}. ${va}`;  
        infor.appendChild(li); 
    });
}
