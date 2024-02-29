let date =new Date();
let clock_hours = date.getHours();
let clock_minute = date.getMinutes();
let clock_second = date.getSeconds();
let clock_=["Sunday","Monday","Tuseday","Wednesday","Thursday","Friday","Saturday"];
let clock_month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"]
let clock_date = date.getDate();
let clock_year = date.getFullYear();
let am_pm ="AM";
if(clock_hours==0)
{
    clock_hours=12;
}
if(clock_hours>12)
{
    clock_hours-12;
    am_pm="PM";
}


document.getElementById("time").innerHTML=clock_hours + ":" + clock_minute + ":" + clock_second + ":" + am_pm;
document.getElementById("time-2").innerHTML=clock_[date.getDay()];
document.getElementById("month").innerHTML=clock_date + ":" + clock_month[date.getMonth()] + ":" + clock_year;

