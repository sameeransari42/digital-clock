let hrs = document.getElementById('hrs');
let mins = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
    let time = new Date();
    hrs.innerText = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours(); 
    mins.innerText = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes(); 
    sec.innerText = (time.getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds(); 
}, 1000)
