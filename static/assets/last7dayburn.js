    const SOLIDWALLET_ENDPOINT = 'https://ctz.solidwallet.io/api/v3';
    const blocksPerDay = 43200; // Assuming a constant number of blocks per day
   
    async function fetchLastBlock() {
        const GET_LAST_BLOCK = {
            "id": 1001,
            "jsonrpc": "2.0",
            "method": "icx_getLastBlock",
        };

        try {
            const response = await fetch(SOLIDWALLET_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(GET_LAST_BLOCK)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            if (data.result) {
                return data.result.height;
            } else {
                throw new Error('No result found');
            }
        } catch (error) {
            console.error("Error fetching last block:", error);
            return null;
        }
    }

    async function fetchBurnedAmount(dayHex) {
        const GET_BURN = {
            "jsonrpc": "2.0",
            "id": new Date().getTime(),
            "method": "icx_call",
            "params": {
                "to": "cxdc30a0d3a1f131565c071272a20bc0b06fd4c17b",
                "dataType": "call",
                "data": {
                    "method": "getBurnedAmount",
                },
                "height": dayHex
            }
        };

        try {
            const response = await fetch(SOLIDWALLET_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(GET_BURN)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            if (data.result) {
                return data.result;
            } else {
                throw new Error('No result found');
            }
        } catch (error) {
            console.error("Error fetching burned amount:", error);
            return '0'; // Return '0' on error to avoid breaking the sum
        }
    }

    async function updateBurnedAmounts() {


        const lastBlockHeight = await fetchLastBlock();
        if (lastBlockHeight === null) return;

        const daysHex = Array.from({ length: 7 }, (_, i) => {
            const blockHeight = lastBlockHeight - (blocksPerDay * i);
            return '0x' + blockHeight.toString(16);
        });
        const burnedAmounts = await Promise.all(daysHex.map(fetchBurnedAmount));
        const burnedAmountsInt = burnedAmounts.map(hexAmount => parseInt(hexAmount, 16));
        const convertedValues = burnedAmountsInt.map(value => (value / 1e18).toFixed(2));
        const totalBurned = convertedValues.reduce((sum, amount) => sum + parseFloat(amount), 0);
        
        document.getElementById('cumulative-burn').textContent = totalBurned.toFixed(0) + ' ICX'; // Assuming ICX as the currency
    }

    updateBurnedAmounts();

