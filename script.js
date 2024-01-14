
function getit() {
    const inpt1 = document.querySelector('input');
    const inpt = document.querySelector('input').value;
    const qbox = document.querySelector('.qrbox');
    const img = document.createElement('img');
    qbox.innerHTML = '';

    if (inpt.length > 0) {
        img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + inpt;
        qbox.appendChild(img);
        qbox.classList.add("show-img");
    } else {
        inpt1.classList.add("error"); 
        setTimeout(() => {
            inpt1.classList.remove('error');
        }, 1000);
    }
}
