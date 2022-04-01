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
        name: 'TerraUSD',
        symbol: 'UST',
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
                price.innerHTML = "$" + (Math.floor(data.USD * 100) / 100).toFixed(2)
            });
    });
}

getPrices();


// let count = setInterval(function () {
//     count++
//     if (count == 1) { getPrices(); count = 0 }
// }, 1);