var menuToggled = false;
const menuImg = document.getElementById("menuImg");

function toggleMenu() {
    menuToggled = !menuToggled
    const menu = document.getElementsByClassName("slideMenu")[0].style;
    const menuImg = document.getElementById("menuImg");

    if (menuToggled) {
        menu.width = "45vw";
        menu.visibility = "visible";
        menuImg.src = "./Assets/close_button.svg"   
        console.log("Menu ON");
    } else {
        menu.width = "0";
        menu.visibility = "hidden";
        menuImg.src = "./Assets/menu_button.svg"
        console.log("Menu OFF");
    }
}


