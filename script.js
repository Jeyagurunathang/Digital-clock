function timer(){

    const hours = document.querySelector(".hours");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds");
    const text = document.querySelector(".txt");

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var txt = "AM";

    console.log(h, m, s);
    if (h > 12){
        h = h - 12;
        txt = "PM";
    }
    else if(h==0){
        txt = "AM";
    }

    hours.innerHTML = h;
    minutes.innerHTML = m<10?"0" + m : m;
    seconds.innerHTML = s<10?"0" + s : s;
    text.innerHTML = txt;
}

setInterval(timer, 1000);