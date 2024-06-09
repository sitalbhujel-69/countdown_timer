const minute = document.querySelector("#hminute")
const second = document.querySelector("#second")
const msecond = document.querySelector("#msecond")

const start = document.getElementById("start")
const reset = document.getElementById("reset")
let click = true;

let intervalid;

const startcount = ()=>{
   if(click === true){

   intervalid = setInterval(() => {
      msecond.innerHTML = parseInt(msecond.innerHTML)+1;
      if(msecond.innerHTML == "100"){
         second.innerHTML = parseInt(second.innerHTML)+1;
         msecond.innerHTML = "00"
      }
      if(second.innerHTML =="60"){
         minute.innerHTML = parseInt(minute.innerHTML)+1
         second.innerHTML = "00"
      }
   }, 10);
   click = false;
   start.innerHTML = "Stop"
   console.log(click)
}
else{
   clearInterval(intervalid)
   click = true;
   start.innerHTML = "Start"
}
   
}
start.addEventListener("click",startcount)

const resetcount =()=>{
   second.innerHTML = "00"
   minute.innerHTML = "00"
   hour.innerHTML = "00"
}
reset.addEventListener("click",resetcount)
    






