// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Address = "0x26b36FAD1F59498436c6c83b0c2133B8D943a1C4";
  // TokenAddress = "0xb770d7D2B60AaDE3e0a5EB58e7EB0b2c8e37EE30" deployed contract

  const TokenContract = await hre.ethers.deployContract("SABZ_Token", [Address]);
  await TokenContract.waitForDeployment();
  console.log("Token has been deployed to:", TokenContract.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
