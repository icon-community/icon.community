
const SOLIDWALLET_ENDPOINT = 'https://ctz.solidwallet.io/api/v3';
const BALANCED_STATS = 'https://balanced.icon.community/api/v1/';
const TRACKER_ENDPOINT = 'https://tracker.icon.community/api/v1/'
const LOOP = new BigNumber('1000000000000000000');
const FETCH_PERIOD = 5000;

const NETWORK_INFO_PARAMS = {
    "jsonrpc": "2.0",
    "id": new Date().getTime(),
    "method": "icx_call",
    "params": {
        "to": "cx0000000000000000000000000000000000000000",
        "dataType": "call",
        "data": {
            "method": "getNetworkInfo"
        }
    }
}

const IISS_PARAMS = {
    "jsonrpc": "2.0",
    "id": new Date().getTime(),
    "method": "icx_call",
    "params": {
        "to": "cx0000000000000000000000000000000000000000",
        "dataType": "call",
        "data": {
            "method": "getIISSInfo"
        }
    }
}

const convertFromLoop = (value) => {
    return new BigNumber(value).div(LOOP);
}

const periodicallyFetchData = () => {
    fetch(`${BALANCED_STATS}tokens?symbol=ICX`)
        .then(res => res.json()
            .then(data => {
                const price = new BigNumber(data[0].price);
                const supply = new BigNumber(data[0].total_supply);
                const avgFeeOffset = new BigNumber(0.1);

                document.getElementById('async-price').innerHTML = `$${price.toFormat(3)}`;
                document.getElementById('async-marketcap').innerHTML = `$${price.times(supply).toFormat(0)}`;
                document.getElementById('async-fee').innerHTML = `~ $${price.times(avgFeeOffset).toFormat(5)}`;
                document.getElementById('async-price-transfer').innerHTML = `$${price.times(0.00125).toFormat(4)}`;
                document.getElementById('async-price-asset').innerHTML = `$${price.times(0.007).toFormat(4)}`;
                document.getElementById('async-price-contract').innerHTML = `$${price.times(0.2).toFormat(4)}`;
            })
        );

    fetch(SOLIDWALLET_ENDPOINT, { method: "POST", body: JSON.stringify(NETWORK_INFO_PARAMS) })
        .then(res => res.json()
            .then(networkInfoData => {
                fetch(SOLIDWALLET_ENDPOINT, { method: "POST", body: JSON.stringify(IISS_PARAMS) })
                    .then(res => res.json()
                        .then(IISSData => {
                            const totalDelegated = new BigNumber(networkInfoData.result.totalDelegated);
                            const totalBonded = new BigNumber(networkInfoData.result.totalBonded);
                            const stakingApr = new BigNumber(IISSData.result.variable.Iglobal)
                                .times(new BigNumber(IISSData.result.variable.Ivoter).times(12))
                                .div(totalDelegated.plus(totalBonded))
                            document.getElementById('async-apr').innerHTML = `${stakingApr.toFormat(2)}%`;
                        })
                    )
            })
        )
}


setInterval(() => periodicallyFetchData(), FETCH_PERIOD)
periodicallyFetchData();