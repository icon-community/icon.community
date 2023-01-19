var icx = document.getElementById('stock-price');

var liveprice = {
    'async': true,
    'crossDomain': true,
    'url': 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=icon&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    'method': 'GET',
    'headers': {}
};

$.ajax(liveprice).done(function (response) {
    icx.innerText = response[0].current_price.toFixed(2);
});