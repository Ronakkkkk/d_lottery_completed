require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://late-compatible-dinghy.ethereum-sepolia.discover.quiknode.pro/39b833323efb6b25ae9617be5dcc3f0dda4fa00b/',
      accounts: ['3c4577ae5a08e4862fbb8113e44f29b14d1890f5ecfc89cfd92a044705a70513'], 
    }
  },
};

