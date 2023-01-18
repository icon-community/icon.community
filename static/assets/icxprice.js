let ws = new WebSocket('wss://stream.binance.com:9443/ws/icxusdt@trade')
let stockPriceElement = document.getElementById('stock-price')
let lastPrice = null;

setTimeout

ws.onmessage = (e) => {
    let stockObject = JSON.parse(e.data);
    console.log(stockObject)
    let price = parseFloat(stockObject.p).toFixed(3);
    
    stockPriceElement.innerText = price;
    lastPrice = price;
}