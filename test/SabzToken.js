
const hre = require("hardhat");

async function main() {


  const SABZ_Token = await hre.ethers.getContractFactory("SABZ_Token");
  
  // Replace 'YOUR_ADDRESS_HERE' with the actual address you want to pass to the constructor
  const initialOwnerAddress = "0x26b36FAD1F59498436c6c83b0c2133B8D943a1C4";
  const sabztoken = await SABZ_Token.deploy(initialOwnerAddress);

  await sabztoken.deployed();

  console.log(
    `Token has been deployed to`, sabztoken.address 
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
