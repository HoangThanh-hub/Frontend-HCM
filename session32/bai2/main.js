const button = document.getElementById('button');
const displayContainer = document.getElementById('displayContainer');
let count = 0;

display();

button.addEventListener('click' , ()=> {
    count++;
    display();

})

function display (){
    const soLuong = document.createElement('p');
    soLuong.innerText= `Số lần bấm: ${count}`;
    displayContainer.innerHTML = '';
    displayContainer.appendChild(soLuong);
}