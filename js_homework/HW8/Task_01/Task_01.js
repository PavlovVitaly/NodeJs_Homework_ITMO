function CreateTimer() {
    var timer = document.createElement("div");
    timer.setAttribute("id", "timer");
    var dateTime = new Date();
    var options = {
        hour: "2-digit", minute: "2-digit", second: "2-digit"
    };

    var time = dateTime.toLocaleTimeString("ru-RU", options);
    time = time.split(":");

    var dDotBetweenHoursAndMinutes = document.createElement("span");
    dDotBetweenHoursAndMinutes.innerText = ":";

    var dDotBetweenMinutesAndSeconds = document.createElement("span");
    dDotBetweenMinutesAndSeconds.innerText = ":";

    var hours = document.createElement("span");
    hours.setAttribute("id", "hours");
    hours.setAttribute("style", 'color:"red"');
    hours.innerText = time[0];
    hours.style.color = "blue";

    var minutes = document.createElement("span");
    minutes.setAttribute("id", "minutes");
    minutes.setAttribute("style", 'color:"green"');
    minutes.innerText = time[1];
    minutes.style.color = "green";

    var seconds = document.createElement("span");
    seconds.setAttribute("id", "seconds");
    seconds.setAttribute("style", 'color:"yellow"');
    seconds.innerText = time[2];
    seconds.style.color = "red";

    timer.appendChild(hours);
    timer.appendChild(dDotBetweenHoursAndMinutes);
    timer.appendChild(minutes);
    timer.appendChild(dDotBetweenMinutesAndSeconds);
    timer.appendChild(seconds);
    timer.style.fontSize = "100px";

    document.body.appendChild(timer);
}

function RefreshTimer() {
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");

    var dateTime = new Date();
    var options = {
        hour: "2-digit", minute: "2-digit", second: "2-digit"
    };


    var time = dateTime.toLocaleTimeString("ru-RU", options);
    time = time.split(":");

    hours.innerText = time[0];
    minutes.innerText = time[1];
    seconds.innerText = time[2];
}