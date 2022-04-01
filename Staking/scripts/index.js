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
    document.body.classList.toggle("light-mode-variables");
    if (modeLogo.innerHTML == "light_mode") {
        modeLogo.innerHTML = "mode_night";
        modeText.innerHTML = "Dark Mode";
    }
    else {
        modeLogo.innerHTML = "light_mode";
        modeText.innerHTML = "Light Mode";
    }

})

Currencies.forEach(currency => {
    const tr = document.createElement("tr");
    tr.id = currency.symbol;
    const trContent = `<td class="currencyName"><div><img src="${currency.logo}"><b>${currency.symbol}</b></div>${currency.name}</td>
                        <td>${currency.APY}</td>
                        <td>${currency.price}</td>
                        <td class="${currency.change > 0 ? 'green' : 'red'}">${currency.change}%</td>
                        <td>${currency.balance}</td>
                        <td><a class="more">more<a></td>`;
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
})