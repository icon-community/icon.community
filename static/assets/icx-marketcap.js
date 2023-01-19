var icxmc = document.getElementById('market-cap');

var liveprice2 = {
    'async': true,
    'crossDomain': true,
    'url': 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=icon&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    'method': 'GET',
    'headers': {}
};

$.ajax(liveprice2).done(function (response) {
    icxmc.innerText = `${((response[0].circulating_supply / 1000000)*(response[0].current_price)).toFixed(2)}M`;
});