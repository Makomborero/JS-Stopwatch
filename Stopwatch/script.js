let minutes = 00;
let seconds = 00;
let tens = 00;
let getMinutes = document.querySelector('.minutes');
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let interval;

btnStart.addEventListener("click",()=>{
   interval = setInterval(startTimer, 10)
})
btnStop.addEventListener("click",()=>{
    clearInterval(interval)
    btnStart.innerHTML = 'continue';
 })
 btnReset.addEventListener("click",()=>{
    clearInterval(interval)
    minutes = '00';
    seconds = '00';
    tens = '00';
    getMinutes.innerHTML = minutes;
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    btnStart.innerHTML = 'start';
 })
function startTimer(){
    tens++;
    if(tens <= 9){
        getTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        getMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        getSeconds.innerHTML = '0' + seconds;
    }
    if(minutes > 9){
        getMinutes.innerHTML = minutes;
    }

}