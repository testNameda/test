var lbtArr = document.getElementsByName("lbt");

initr();

function initr() {
    lbtArr[0].style.display = "inline-block"
}

function changeImg(i) {
    if (lbtArr.length < 5) {
        lbtArr = document.getElementsByName("lbt");
    }
    for (var j = 0; j < lbtArr.length; j++) {
        if (j + 1 == i)
            lbtArr[j].style.display = "block";
        else {
            lbtArr[j].style.display = "none";
        }
    }
}