async function getTotalSupply() {
    var stakingrate = document.getElementById('staking-rate');
    
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    let raw = JSON.stringify({
        jsonrpc: "2.0",
        method: "icx_getTotalSupply",
        id: 1234,
    });
  
    let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
    };
  
    const res = await fetch("https://ctz.solidwallet.io/api/v3", requestOptions)
        const _json = await res.json()
        const num = Number(_json.result)/1000000000000000000
        return num
  }
  
  async function getTotalDelegation() {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      let raw = JSON.stringify({
          jsonrpc: "2.0",
          method: "icx_call",
          id: 1234,
          params: {
              from: "hx0000000000000000000000000000000000000000",
              to: "cx0000000000000000000000000000000000000000",
              dataType: "call",
              data: {
                  method: "getPReps",
              }
          }
      });
  
      let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
      };
  
      const res = await fetch("https://api.icon.community/api/v3", requestOptions)
      const _json = await res.json()
      const num = Number(_json.result.totalDelegated)/1000000000000000000
      return num
    }
  
  //   Now I want to divide the total supply by the total delegation to get the staking rate
  
  async function getStakingRate() {
      const totalSupply = await getTotalSupply();
      const totalDelegation = await getTotalDelegation();
      const stakingRate = totalSupply * 0.0399 * 0.77 *100 / totalDelegation;  
      return stakingRate;    
    }

  async function setStakingRate() {
      const stakingRate = await getStakingRate();
      const stakingRateElement = document.getElementById('staking-rate');
      stakingRateElement.innerText = stakingRate.toFixed(2);
  }

  setStakingRate();