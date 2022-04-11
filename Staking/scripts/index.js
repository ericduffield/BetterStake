const Currencies = [
    {
        logo: "./images/btc.png",
        name: 'Bitcoin',
        symbol: 'BTC',
        APY: "10%",
        price: "",
        change: -0.57,
        balance: '0.0325',
    },
    {
        logo: "./images/eth.svg",
        name: 'Ethereum',
        symbol: 'ETH',
        APY: "13.5%",
        price: '',
        change: 1.25,
        balance: '0.175',
    },
    {
        logo: "./images/usdc.png",
        name: 'Usd Coin',
        symbol: 'USDC',
        APY: "15%",
        price: '',
        change: 0.01,
        balance: '257.00',
    },
    {
        logo: "./images/ust.png",
        name: 'Tether',
        symbol: 'USDT',
        APY: "15%",
        price: '',
        change: -0.01,
        balance: '127.00',
    },
    {
        logo: "./images/usdt.svg",
        name: 'TerraUSD',
        symbol: 'UST',
        APY: "15%",
        price: '',
        change: -0.01,
        balance: '127.00',
    },
    {
        logo: "./images/busd.png",
        name: 'Binance USD',
        symbol: 'BUSD',
        APY: "15%",
        price: '',
        change: -0.01,
        balance: '127.00',
    }
]

const getPrices = async () => {
    Currencies.forEach(function (currency) {
        fetch('https://min-api.cryptocompare.com/data/price?fsym=' + currency.symbol + '&tsyms=USD')
            .then(response => response.json())
            .then(data => {
                let price = document.querySelector("#" + currency.symbol).children[2];

                //price.innerHTML = "$" + data.USD.toFixed(2)
                price.innerHTML = "$" + (Math.round(data.USD * 100) / 100).toLocaleString(); //Intl.NumberFormat().format(data.USD); (Math.floor(data.USD * 100) / 100).toFixed(2)
            });
    });
}


getPrices();

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

function AddTransitions() {
    document.querySelector("table").style.transition = "all 300ms ease";

    const insights = document.querySelector("#insights");
    for (var i = 0; i < insights.children.length; i++) {
        insights.children[i].style.transition = "all 300ms ease";
    }
}

function RemoveTransitions() {
    document.querySelector("table").style.transition = "none";

    const insights = document.querySelector("#insights");
    for (var i = 0; i < insights.children.length; i++) {
        insights.children[i].style.transition = "none";
    }
}

window.onload = function () {
    AddTransitions();
}