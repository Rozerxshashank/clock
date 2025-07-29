const hour=document.getElementById("hour");
const min=document.getElementById("min");
const sec=document.getElementById("sec");
const day=document.getElementById("day");
const date=document.getElementById("date");
const month=document.getElementById("month");
const format=document.getElementById("Format");
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
let toggle=false;
const ampm=document.getElementById("ampm");
function updateClock(){
    const now=new Date();
    let hours=now.getHours();
    ampm.textContent=hours>=12?"PM":"AM";
    if(toggle){
        hours=hours%12 || 12;
    }
     hour.textContent=(hours).toString().padStart(2,"0");
    min.textContent=now.getMinutes().toString().padStart(2,"0");
    sec.textContent=now.getSeconds().toString().padStart(2,"0");
    date.textContent=`Date: ${now.getDate().toString().padStart(2,"0")+"/"+(now.getMonth()+1).toString().padStart(2,"0")+"/"+now.getFullYear()}`;
    month.textContent=`Month: ${months[now.getMonth()]}`;
    day.textContent=`Day: ${days[now.getDay()]}`; 
}
updateClock();
setInterval(updateClock,1000);
format.addEventListener("click",()=>{
        toggle=!toggle;
        format.innerText = toggle ? "24HR Format" : "12HR Format";
        updateClock();
    });
