const { staking } = require("../helper/staking");

const MasterChefContract = "0x33141e87ad2DFae5FBd12Ed6e61Fa2374aAeD029";
const FISH = "0xb348B87b23D5977E2948E6f36ca07E1EC94d7328";

const { getUniTVL } = require('../helper/unknownTokens')
module.exports = {
    methodology: `Uses factory(0x71539D09D3890195dDa87A6198B98B75211b72F3) address and whitelisted tokens address to find and price Liquidity Pool pairs`,
    arbitrum: {
        tvl: getUniTVL({ factory: '0x71539D09D3890195dDa87A6198B98B75211b72F3', chain: 'arbitrum' }),
        staking: staking(MasterChefContract, FISH, "arbitrum"),
    }
};

