var isStop = true;
var second = 0;
var minute = 0;
var hour = 0;

function start()
{
    if(isStop== true)
    {
        isStop = false;
        timer();
    }
}

function timer ()
{
    if (isStop == false)
    {
        second = parseInt (second);
        minute = parseInt (minute);
        hour = parseInt (hour);
        second++;
        if(second==60)
        {
            second=0;
            minute++;
        }
        if (minute == 60)
        {
            minute = 0;
            hour ++;
        }

        if(second<10)
        {
            second="0" + second;
        }
        if(minute<10)
        {
            minute="0" + minute;
        }
        if(hour<10)
        {
            hour="0" + hour;
        }
        stopwatch.innerHTML = hour +":" + minute + ":" + second;
        setTimeout("timer()",1000)
    }
}
function pause()
{
    isStop = true;
}

function reset()
{
    isStop = true;
    second = 0;
    minute = 0;
    hour = 0;

    stopwatch.innerHTML = "00 : 00 : 00"
    document.getElementById("lapsList").innerHTML = "";
}

function laps() 
{
    var currentLapTime = document.getElementById("stopwatch").innerHTML;
    var li = document.createElement("li");
    li.innerText = currentLapTime;
    document.getElementById("lapsList").appendChild(li);
}