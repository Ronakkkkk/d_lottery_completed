require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: '0.8.18',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/wXZYmcqtmVBwSCT18ibAfJdt7oiYouuR',
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
  },
};

