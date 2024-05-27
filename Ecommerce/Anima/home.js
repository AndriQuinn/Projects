console.log("Adnrie Quinatac-an");
console.log("5 / 24 / 2024");
console.log("5月 24日 24年");
console.log("WorkTime: 5 Hours");
console.log("Eccomerce Web App");
console.log("Bat ang pogi ko?");
console.log("Single po ako lmao");

var banners =  {
    1: "./Assets/marin_banner.webp",
    2: "./Assets/meltryllis_banner.webp",
    3: "./Assets/cheshire_banner.webp"
};

var pos = 2;

setInterval(() => {

    let banner = document.getElementsByClassName('banner')[0];

    // console.log(pos);1
    // console.log(banners[pos])
    banner.style.transition = "all 0.3s";
    banner.style.backgroundImage = "url("+banners[pos]+")";
    pos += 1;
    if (pos > 3) {
        pos = 1;
    }
    
}, 1700)
