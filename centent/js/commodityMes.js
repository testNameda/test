var lbtArr = document.getElementsByName("lbt");
var lbtItem = document.getElementsByName("lbt")[0];
var fdjView = document.getElementById("fdj-view");
var fdjBox = document.getElementById("fdj-box");
var fdjIcon = document.getElementById("fangdajing-icon");
var num = 0;
var onOff = true;

initr();

function initr() {
    lbtArr[0].style.display = "inline-block"
    fdjView.style.backgroundImage = "url('img/spxq-lbt/fandat/fanda-1.jpg')";
}

function changeImg(i) {
    if (lbtArr.length < 5) {
        lbtArr = document.getElementsByName("lbt");
    }
    for (var j = 0; j < lbtArr.length; j++) {
        if (j + 1 == i) {
            lbtArr[j].style.display = "block";
            lbtItem = lbtArr[j];
            var url = 'img/spxq-lbt/fandat/fanda-' + i + '.jpg'
            fdjView.style.backgroundImage = "url(" + url + ")";
            num = j;
            onOff = true;
        } else {
            lbtArr[j].style.display = "none";
        }
    }
}

function fangDaJ() {
    if (onOff) {
        fdjView.style.display = "block";
        fdjBox.style.display = "block";
        fdjIcon.style.display = "none";
        onOff = false;
    }

    var ev = ev || window.event;
    var x = ev.clientX - lbtItem.getBoundingClientRect().left - 50;
    var y = ev.clientY - lbtItem.getBoundingClientRect().top - 50;

    if (num == 0) {
        if (x < 0) {
            fdjView.style.backgroundPositionX = 0 + "px";
            fdjBox.style.left = 0 + "px";
        } else if (x > 318) {
            fdjView.style.backgroundPositionX = -382 + "px"
            fdjBox.style.left = 318 + "px";
        } else {
            fdjView.style.backgroundPositionX = -1.2 * x + "px";
            fdjBox.style.left = x + "px";
        }
        if (y < 0) {
            fdjView.style.backgroundPositionY = 0 + "px";
            fdjBox.style.top = 0 + "px"
        } else if (y > 318) {
            fdjView.style.backgroundPositionY = -382 + "px"
            fdjBox.style.top = 318 + "px"
        } else {
            fdjView.style.backgroundPositionY = -1.2 * y + "px";
            fdjBox.style.top = y + "px"
        }
    } else {
        if (x < 0) {
            fdjView.style.backgroundPositionX = 0 + "px";
            fdjBox.style.left = 0 + "px";
        } else if (x > 318) {
            fdjView.style.backgroundPositionX = -862 + "px"
            fdjBox.style.left = 318 + "px";
        } else {
            fdjView.style.backgroundPositionX = -2.7 * x + "px";
            fdjBox.style.left = x + "px";
        }
        if (y < 0) {
            fdjView.style.backgroundPositionY = 0 + "px";
            fdjBox.style.top = 0 + "px"
        } else if (y > 318) {
            fdjView.style.backgroundPositionY = -862 + "px"
            fdjBox.style.top = 318 + "px"
        } else {
            fdjView.style.backgroundPositionY = -2.7 * y + "px";
            fdjBox.style.top = y + "px"
        }
    }
}

function fdjJs() {
    fdjView.style.display = "none";
    fdjBox.style.display = "none";
    fdjIcon.style.display = "block";
    onOff = true;
}