var col = ["#951935", "#ffffff", "#c9a207", "#e8e8e8", "#e8e8e8", "#e0d1b8"];
var img = document.getElementById("main-bg");
var marbot = document.getElementById("mar-bot");
var id = 1;
var interval3;
var interval1;
var interval2;
var interval0;

var yz = 0;
var lastNum = -1;

init();

function init() {
    console.log(123);
    setPpItemsBg();
    interval0 = setInterval(b, 6000);
}

function b() {
    if (id < 6)
        id = id + 1;
    else
        id = 1;
    console.log(456);
    clearInterval(interval1);
    clearInterval(interval2);
    clearInterval(interval3);
    interval1 = setInterval(asd, 40);

}


function lbt(i) {
    if (parseInt(img.src.split("lunbotu-")[1].split(".jpg")[0]) == i) {
        return;
    }
    clearInterval(interval0);
    init();
    id = i;
    interval3 = setInterval(asd, 20);
}

function asd() {
    var a = img.style.opacity;
    if (a <= 0.1) {
        clearInterval(interval1);
        clearInterval(interval3);
        interval2 = setInterval(dsa, 20);
        return;
    } else {
        img.style.opacity = img.style.opacity - 0.05;
    }
}

function dsa() {
    var a = img.style.opacity;
    if (parseInt(img.src.split("lunbotu-")[1].split(".jpg")[0]) != id) {
        marbot.style.backgroundColor = col[id - 1];
        img.src = "img/main-bg/lunbotu-" + id + ".jpg";
        console.log(789);

    }
    if (a >= 1) {
        clearInterval(interval2);
        var kl;
        for (var s = 1; s < 7; s++) {
            kl = document.getElementById("lbt-" + s);
            kl.style.backgroundColor = "#7c7c7c";
        }
        var lbt = document.getElementById("lbt-" + id);
        lbt.style.backgroundColor = "#ffffff";
        return;
    } else {
        img.style.opacity = (parseFloat(img.style.opacity) + 0.02) + "";
    }
}

function setPpItemsBg() {
    var ppItemsArr = document.getElementsByName("pp-item");

    for (var i = 0; i < ppItemsArr.length; i++) {
        var temp = ppItemsArr[i];
        if (i % 10 == 0 && i != 0) {
            yz = yz - 110;
            lastNum = -1;;
        }
        temp.style.backgroundPositionY = yz + "px"
        temp.style.backgroundPositionX = lastNum + "px";
        lastNum = lastNum - 123;

    }


}