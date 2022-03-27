const nav = document.getElementById("nav");
const navMenuBtn = document.getElementById("nav-menu-btn");
const navMenu = document.getElementById("nav-menu");
function mediaQuery1200 (x) {
    console.log(x);
    if (x.matches) {
        navMenuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("uncollapse");
        })
    } else {
        navMenuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("left-0");
        })
    }
}
const mQ1200 = window.matchMedia("(min-width: 1200px)");
mediaQuery1200(mQ1200);
mQ1200.addEventListener(mediaQuery1200);