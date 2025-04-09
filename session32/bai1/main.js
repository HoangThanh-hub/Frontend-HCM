const bg = document.getElementById('bg');
const changeColor = document.getElementById('changeColor');
changeColor.addEventListener("click", ()=>{
    bg.style.backgroundColor = getRandomHexColor() 
})

function getRandomHexColor() {
    
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}