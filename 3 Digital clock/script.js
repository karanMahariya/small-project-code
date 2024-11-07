const clock = document.getElementById("clock");
// const clock = document.querySelector("clock");   //we can use anyone 
clock.innerHTML= "00:00:00 NA";

const mytime = setInterval(setCount,1000);
function setCount(){
    const date = new Date();
    clock.innerText = date.toLocaleTimeString();
}