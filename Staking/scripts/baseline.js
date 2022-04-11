const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const darkMode = document.querySelector("#dark-mode");
const modeLogo = document.querySelector("#mode-logo");
const modeText = document.querySelector("#mode-text");

menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
})

closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
})

darkMode.addEventListener("click", () => {
    toggleMode();
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function toggleMode() {
    RemoveTransitions();
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000 * 24 * 60 * 60;
    now.setTime(expireTime);
    document.body.classList.toggle("light-mode-variables");
    if (modeLogo.innerHTML == "light_mode") {
        modeLogo.innerHTML = "mode_night";
        modeText.innerHTML = "Dark Mode";
        document.cookie = "isDark=true; expires=" + now.toUTCString() + "path=/;";
    }
    else {
        modeLogo.innerHTML = "light_mode";
        modeText.innerHTML = "Light Mode";
        document.cookie = "isDark=false; expires=" + now.toUTCString() + "path=/;";
    }

    document.cookie =
        sleep(300).then(() => {
            AddTransitions();
        });
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

if (getCookie("isDark") == "true") {
    toggleMode();
}