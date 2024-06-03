console.log("Adnrie Quinatac-an");
console.log("5 / 24 / 2024");
console.log("5月 24日 24年");
console.log("Eccomerce Web App");
console.log("Bat ang pogi ko?");
console.log("Single po ako lmao");

var banners =  {
    1: "./Assets/rtx4090.jpg",
    2: "./Assets/rtx4080.jpg",
};

var pos = 2;

setInterval(() => {

    let banner = document.getElementsByClassName('banner')[0];

    // console.log(pos);1
    // console.log(banners[pos])

    banner.style.backgroundImage = "url("+banners[pos]+")";
    pos += 1;
    if (pos > 2) {
        pos = 1;
    }
}, 2000)
