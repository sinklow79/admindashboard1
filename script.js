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

const navThemeToggles = document.querySelectorAll(".thm-tggl-sb-cntnr");
for (let i = 0; i < navThemeToggles.length; i++) {
    let elem = navThemeToggles[i];
    elem.addEventListener('click', () => {
        elem.children[0].classList.toggle("left-50");
        elem.children[1].classList.toggle("color-dark");
        elem.children[2].classList.toggle("color-white-white");
    })
}
document.addEventListener("click", e => {
    const isDropDown = e.target.matches("[data-dropdown]");
    let dropDowns = document.querySelectorAll('[data-dropdown]');
    let idk = e.target.querySelector(".nav__profile-dropdown");
    if (!isDropDown && idk) {
        for (let i = 0; i < dropDowns.length; i++) {
            dropDowns[i].classList.remove('active');
        }
    }
    e.target.classList.toggle('active');
})