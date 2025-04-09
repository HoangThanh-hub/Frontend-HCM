 
 const increaseBtn = document.getElementById('increaseBtn');
 const decreaseBtn = document.getElementById('decreaseBtn');
 const text = document.getElementById('text');

 
 let currentFontSize = 20; 

 
 increaseBtn.addEventListener('click', () => {
     currentFontSize += 2; 
     text.style.fontSize = currentFontSize + 'px'; 
 });

 // Giảm kích thước chữ
 decreaseBtn.addEventListener('click', () => {
     currentFontSize -= 2; 
     text.style.fontSize = currentFontSize + 'px'; 
 });