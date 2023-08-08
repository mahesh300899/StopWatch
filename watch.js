var start=document.getElementById('start');
var stop=document.getElementById('stop');
var reset=document.getElementById('reset');
//variable of those we have change initially we take minutestr,minute all are 0.
let istimer=true;
let minutestr=0;
let secstr=0;
let second=0;
let minute=0;

 
stop.addEventListener('click',function(){
  //after stop istimer become false if ustimer is false then start will not work because they require true..
    istimer=false;
})
//this is for reset..
reset.addEventListener('click',function(){
  //After clicking reset istimer become false and every value of secste,and second minute become zero.
    istimer=false;
    secstr=0;
    minutestr=0;
    second=0;
    minute=0;
    document.getElementById('minute').innerHTML="00";
    document.getElementById('second').innerHTML="00";
})
//stopwatch function to increase the second and minute..
function stopWatch(){
  if(istimer){
      second++;
     if(second==60){
        minute=minute+1;
        second=0;
      }
      if(minute<10)
      minutestr="0"+minute;
    else
    minuterstr=minute;
      if(second<10)
      secstr="0"+second;
    else
    secstr=second;
  
      document.getElementById('minute').innerHTML=minutestr;
      document.getElementById('second').innerHTML=secstr;

      //after every second value is increases until they are stop and reset.
      setTimeout(stopWatch,1000);
    } 
}

start.addEventListener('click',function(){
  //boolean for check is the start or not if we click reset and stop then istimer become false and stop.
    istimer=true;
    //After one second second increase by 1
     setTimeout(stopWatch,1000);

   });
