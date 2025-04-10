
function count() {
    let text = document.getElementById('text').value; 
    let kitu = document.getElementById('kitu');

    let arr = text.split(""); 

    const check = document.getElementById("check"); 

    let dem = 0; 
    let kiTu = document.createElement("p");

   
    for (let i = 0; i < arr.length; i++) {
        dem++; 
    }

    kiTu.innerText = `Có ${dem} ký tự`; 
    kitu.innerHTML = ""; 
    kitu.appendChild(kiTu); 
    
    
}