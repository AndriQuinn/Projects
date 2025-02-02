const dateNow = new Date().toString().split(" ");
var day = document.getElementById("day");
var week = document.getElementById("week");
var month = document.getElementById("month");
day.textContent = dateNow[2] + " 日";
week.textContent = (Math.round(parseInt(dateNow[2]) / 7 +0.6)) + " 週";
month.textContent = parseInt(new Date().getMonth()) + 1 + " 月";

var menuToggled = false;

function toggleMenu() {
    menuToggled = !menuToggled
    const menu = document.getElementsByClassName("slideMenu")[0].style;
    const menuImg = document.getElementById("menuImg");

    if (menuToggled) {
        menu.width = "45vw";
        menu.visibility = "visible";
        menuImg.src = "./assets/icons/close_button.svg"   
        console.log("Menu ON");
    } else {
        menu.width = "0";
        menu.visibility = "hidden";
        menuImg.src = "./assets/icons/menu_button.svg"
        console.log("Menu OFF");
    }
}

