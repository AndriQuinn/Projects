
// Date Tracking
const dateNow = new Date().toString().split(" ");
var day = document.getElementsByClassName("day");
var week = document.getElementsByClassName("week");
var month = document.getElementsByClassName("month");;

// Inject Spevified Dates
// Allowance Board
day[0].textContent = dateNow[2] + " 日";
week[0].textContent= (Math.round(parseInt(dateNow[2]) / 7 +0.6)) + " 週";
month[0].textContent= parseInt(new Date().getMonth()) + 1 + " 月";

// Expense Board
day[1].textContent  = dateNow[2] + " 日";
week[1].textContent  = (Math.round(parseInt(dateNow[2]) / 7 +0.6)) + " 週";
month[1].textContent  = parseInt(new Date().getMonth()) + 1 + " 月";

// Menu Toggled
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

