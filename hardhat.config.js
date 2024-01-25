require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.21",
  networks: {
    bsc: {
      url: 'https://bsc-testnet.publicnode.com',
      accounts: [process.env.PRIVATE_KEY],
    },

  }
};
