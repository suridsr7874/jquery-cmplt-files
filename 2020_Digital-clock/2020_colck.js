// Indian Watch
let indianWatch=()=>{
    let today=new date();
    let options = {timeZone : 'Asia/Kolkata'};
    let time=today.toLocaleTimeString('en-US',options);
    let date=today.toLocaleDateString('it-IT',options);
    $(#indian-time).text(time);
    $(#indian-date).text(date);
};
setInterval(indianWatch,1000);


//usa
let usaWatch=()=>{
    let today =new date();
let options={timeZone:'America/New_York'};
let time=today.toLocaleTimeString('en-US',options);
let date =today.toLocaleDateString('it-IT',options);
$(#usa-time).text(time);
$(#usa-date).text(date);
};
setInterval(usaWatch,1000);


let chinaWatch=()=>{
    let today =new date();
    let options={timeZone:'Asia/Shanghai'};
    let time=today.toLocaleTimeString('en-US',options);
    let date =today.toLocaleDateString('it-IT',options);
    $(#china-time).text(time);
    $(#china-date).text(date);
};
setInterval(chinaWatch,1000);