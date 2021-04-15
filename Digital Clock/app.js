// function digitalClock() {
//     let date = new Date()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()
//     let timeFormat = 'AM'

//     if (hours === 0) {
//         hours=12
//     }
//     if (hours>12) {
//         hours = hours - 12
//         timeFormat='PM'
//     }

//     hours = hours < 10 ? '0' + hours : hours
//     minutes = minutes < 10 ? '0' + minutes : minutes
//     seconds = seconds < 10 ? '0' + seconds : seconds

//     let fullTime = `${hours}:${minutes}:${seconds}`
    
//     document.getElementById('time').innerText = fullTime
//     document.querySelector('small').innerText = timeFormat

//     setInterval(digitalClock, 1000)

// }

// digitalClock()






let timeShown = document.querySelector('#time');
let meridian = document.querySelector("small");

function digitalClock() {
    let clock=new Date();
    let hours= clock.getHours();
    let minutes= clock.getMinutes();
    let seconds= clock.getSeconds();
    let amNakipm
    if(hours>11){
     amNakipm = "PM"
   }
   else{
     amNakipm = "AM"
   }
    if(hours>12){
        hours=hours-12;
    }

    hours = hours<10 ? "0"+hours : hours;
    minutes = minutes<10 ? "0"+minutes : minutes;
    seconds = seconds<10 ? "0"+seconds : seconds;

    let finalTime=`${hours}:${minutes}:${seconds}`;
    
  
    timeShown.innerHTML=finalTime;
    meridian.innerHTML=amNakipm;
 
    setInterval(digitalClock,1000);
}
digitalClock();































