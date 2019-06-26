var col = ["#951935", "#ffffff", "#c9a207", "#e8e8e8", "#e8e8e8", "#e0d1b8"];
var img = document.getElementById("main-bg");
var marbot = document.getElementById("mar-bot");
var id = 1;
var interval1;
var interval2;
var interval0;
var onoff = true;

init();

function init() {
    if (onoff) {
        interval0 = setInterval(b, 5000);
    }
}

function b() {
    if (id < 6)
        id = id + 1;
    else
        id = 1;
    interval1 = setInterval(asd, 40);
    onoff = false;

}


function lbt(i) {
    if (parseInt(img.src.split("lunbotu-")[1].split(".jpg")[0]) == i) {
        return;
    }
    clearInterval(interval0);
    onoff = true;
    init();
    id = i;
    interval1 = setInterval(asd, 20);
}

function asd() {
    var a = img.style.opacity;
    if (a <= 0) {
        clearInterval(interval1);
        interval2 = setInterval(dsa, 20);
    } else {
        img.style.opacity = img.style.opacity - 0.05;
    }
}

function dsa() {
    var a = img.style.opacity;
    marbot.style.backgroundColor = col[id - 1];
    img.src = "img/main-bg/lunbotu-" + id + ".jpg";
    if (a >= 1) {
        clearInterval(interval2);
        var kl;
        for (var s = 1; s < 7; s++) {
            kl = document.getElementById("lbt-" + s);
            kl.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        }
        var lbt = document.getElementById("lbt-" + id);
        lbt.style.backgroundColor = "#ffffff";
    } else {
        img.style.opacity = (parseFloat(img.style.opacity) + 0.05) + "";
    }
}