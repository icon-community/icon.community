import IconService from "icon-sdk-js";

const getStakingRate = async () => {
  const iconService = new IconService(new IconService.HttpProvider("https://ctz.solidwallet.io/api/v3"));
  const totalSupply = await iconService.getTotalSupply().execute();
  console.log(totalSupply);
}

getStakingRate();