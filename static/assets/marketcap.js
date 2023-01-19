// let price = document.getElementById('stock-price').innerText
let price = 0.19

// Function that sets Total Supply if price is found
const getMarketcap = () => {
    if(price > 0) {
        fetch('https://api.icon.community/api/v3', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                "jsonrpc":"2.0",
                "id":934533478,
                "method":"icx_getTotalSupply"}
            )})
            .then(response => response.json())
            .then(response => {
                let result = response.result;
                // Results from HEX to DEC
                let totalSupply = parseInt(result, 16);
                totalSupply = totalSupply / 10 ** 24;
                document.getElementById('marketcap').innerText = `${(totalSupply * price).toFixed(2)}M`;
                clearInterval(priceCheck);
            })
        } else {
            console.log('No price found');
        }
    }

// run if function every 2 seconds
const priceCheck = () => {
    setInterval(getMarketcap, 2000);
}

priceCheck();
