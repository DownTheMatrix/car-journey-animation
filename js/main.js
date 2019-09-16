const surface = document.querySelector(".surface");
const sky = document.querySelector(".sky");
const truck = document.querySelector(".truck img");
let flag = false;
const truckImages = ["./images/truck-lights-off.svg", "./images/truck-lights-on.svg"];
const modal = document.querySelector(".modal");
const bird = document.querySelector(".bird");
const sun = document.querySelector(".sun img");
const cloud = document.querySelector(".cloud img");

/* Display Modal */
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        modal.style.opacity = 1;
    }, 1500);
    /* sun.classList.add("glow"); */
    cloud.classList.add("float");
})

/* Play BG Music */
const audio = new Audio('../audio/bg-music.mp3');

/* Move Background */
document.addEventListener("keydown", function(evt) {
    if(evt.code === "Enter") {
        modal.style.opacity = 0;
        audio.play();
        /* sky.classList.add("moveSky"); */
        surface.classList.add("moveScene");
        truck.classList.add("suspension");
    }
    else if(evt.code === "Space") {
        modal.style.opacity = 1;
        audio.pause();
        /* sky.classList.remove("moveSky"); */
        surface.classList.remove("moveScene");
        truck.classList.remove("suspension");
    }
})

/* Toggle truck lights */
document.addEventListener("keydown", function(evt) {
    if(evt.code === "KeyF") {
        if(flag === false) {
            flag = true;
            truck.setAttribute("src", truckImages[1]);
        } else {
            flag = false;
            truck.setAttribute("src", truckImages[0]);
        }
    }
})
