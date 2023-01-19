let ws = new WebSocket('wss://stream.binance.com:9443/ws/icxusdt@trade')
let stockPriceElement = document.getElementById('stock-price')
let lastPrice = null;

ws.onload = (e) => {
    let stockObject = JSON.parse(e.data);
    let price = parseFloat(stockObject.p).toFixed(3);
    stockPriceElement.innerText = price;
    lastPrice = price;
}