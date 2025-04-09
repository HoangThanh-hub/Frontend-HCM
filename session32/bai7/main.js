const img = document.querySelectorAll('.img');
const fullScreen = document.getElementById('fullScreen');
const fullScreenImage = fullScreen.querySelector('img');


img.forEach(img => {
    img.addEventListener('click', function() {
        const fullsizeSrc = this.getAttribute('data-fullsize');
        fullScreen.style.display = 'flex';
        fullScreenImage.src = fullsizeSrc; 
    });
});


fullScreen.addEventListener('click', function() {
    fullScreen.style.display = 'none';
});