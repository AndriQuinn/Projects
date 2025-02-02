var menuToggled = false;
const menuImg = document.getElementById("menuImg");

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

var date = new Date();
var dateString = date.toString().split(" ");
var day = document.getElementsByClassName("label")[1];
day.textContent = dateString[2] + " 日";
