var onOff = false;

function inp() {

    onOff = !onOff;
    if (onOff) {
        var hx1 = document.getElementById("hx1");
        var hx2 = document.getElementById("hx2");
        hx1.style.display = "none";
        hx2.style.display = "inline-block";
        hx2.style.height = "272px"
    } else {
        var hx1 = document.getElementById("hx1");
        var hx2 = document.getElementById("hx2");
        hx1.style.display = "inline-block";
        hx2.style.display = "none";
    }

}