require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {},
    sepolia: {
      
      url: process.env.QUICKNODE_API_KEY_URL,
      accounts: [`0*${process.env.GOERLI_PRIVATE_KEY}`],
    }
  },
};
