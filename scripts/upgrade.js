const { ethers, upgrades } = require("hardhat");

async function main() {
  const VanarCoin2 = await ethers.getContractFactory("VanarCoin2");
  console.log("Upgrading VanarCoin proxy...");
  await upgrades.upgradeProxy(
    "0xfeD72C2AB844Fe7475E5DE14677818605E642c2f", // Replace with your proxy contract's address
    VanarCoin2
  );
  console.log("Upgraded Successfully");
}

main();
