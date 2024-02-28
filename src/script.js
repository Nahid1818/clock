function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let meridiem = hours >= 12 ? 'PM' : 'AM';

    //cnvert hours to 12 hours formate
    hours = hours % 12;
    hours = hours ? hours : 12;

    //add leading if the number less then 10
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    //formating and add them to html
    let timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    document.getElementById("time").textContent = timeString;
}

//update clock every 1 seconds
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();