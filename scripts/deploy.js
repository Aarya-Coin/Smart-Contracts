const { ethers, upgrades } = require("hardhat");

async function main() {
  const ERC20UpgradableV1 = await ethers.getContractFactory(
    "AaryaV1"
  );
  console.log("Deploying Aarya...");
  const contract = await upgrades.deployProxy(ERC20UpgradableV1, [], {
    initializer: "initialize",
    kind: "uups",
  });
  await contract.deployed();
  console.log("Aarya is deployed to:", contract.address);
}

main();