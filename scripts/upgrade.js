const { ethers, upgrades } = require("hardhat");

async function main() {
  const Aarya = await ethers.getContractFactory("AaryaV2");
  console.log("Upgrading Aarya proxy...");
  await upgrades.upgradeProxy(
    "0x0c3B13f9D5156d1195644852661bA61ae53A423C", // Replace with your proxy contract's address
    Aarya
  );
  console.log("Upgraded Successfully");
}

main();
