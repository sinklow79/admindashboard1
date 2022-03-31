const nav = document.getElementById("nav");
const navMenuBtn = document.getElementById("nav-menu-btn");
const navMenu = document.getElementById("nav-menu");
function mediaQuery1200 (x) {
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
mQ1200.addEventListener("change" ,mediaQuery1200);
const themeToggleContainers = document.querySelectorAll(".thm-tggl-sb-cntnr");
for (let i = 0; i < themeToggleContainers.length; i++) {
    let iconBgs = document.querySelectorAll(".theme-toggle-icon-bg");
    themeToggleContainers[i].addEventListener('click', () => {
        iconBgs[i].classList.toggle("left-50");
        themeToggleContainers[i].children[2].classList.toggle("color-white-white");
    })
}