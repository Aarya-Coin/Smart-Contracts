const { ethers, upgrades } = require("hardhat");

async function main() {
  const ERC20UpgradableV1 = await ethers.getContractFactory(
    "VanarCoin"
  );
  console.log("Deploying Vanar Coin...");
  const contract = await upgrades.deployProxy(ERC20UpgradableV1, [], {
    initializer: "initialize",
    kind: "uups",
  });
  await contract.deployed();
  console.log("Vanar Coin is deployed to:", contract.address);
}

main();