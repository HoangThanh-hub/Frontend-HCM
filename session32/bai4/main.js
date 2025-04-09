const form = document.getElementById('form');
const messageElement = document.getElementById('message');



form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    let email = document.getElementById('email').value;
    form.reset();

    if (checkEmail(email)) {
        messageElement.textContent = 'Email hợp lệ!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Email không hợp lệ! Email phải chứa "@" và kết thúc với .com hoặc .vn.';
        messageElement.style.color = 'red';
    }

});



function checkEmail(email){
    const emailArray = email.split(''); 

    const aCong = emailArray.some(char => char === '@'); 
    const duoi = email.endsWith('.com') || email.endsWith('.vn'); 

    return aCong && duoi;
}