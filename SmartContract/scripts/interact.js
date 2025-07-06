const hre = require("hardhat");
const { EvmPriceServiceConnection } = require("@pythnetwork/pyth-evm-js");


async function main() {
  const CFXPrice = await hre.ethers.getContractFactory("CFXPrice");
  const cfxPrice = await CFXPrice.attach("0xEfb75B968Dd978d8A1b1Ef7579C7AdBBffA3EE55"); // Replace with your actual deployed address

  const connection = new EvmPriceServiceConnection(
    "https://hermes.pyth.network" // Use Hermes price service
  );

  const priceIds = [
    "0x8879170230c9603342f3837cf9a8e76c61791198fb1271bb2552c9af7b33c933", // CFX/USD price feed ID
  ];

  try {
    const priceUpdateData = await connection.getPriceFeedsUpdateData(priceIds);
    
    // Estimate gas
    const gasEstimate = await cfxPrice.estimateGas.getCFXPrice(priceUpdateData, {
      value: hre.ethers.utils.parseEther("0.01"), // Send some CFX to pay for the update fee, adjust as needed
    });

    console.log("Estimated gas:", gasEstimate.toString());

    // Call getCFXPrice function
    const tx = await cfxPrice.getCFXPrice(priceUpdateData, {
      value: hre.ethers.utils.parseEther("0.01"), // Send some CFX to pay for the update fee, adjust as needed
    });

    console.log("Transaction sent:", tx.hash);

    // Wait for transaction confirmation
    const receipt = await tx.wait();

    console.log("Transaction confirmed in block:", receipt.blockNumber);

    // Get the price directly using callStatic (ethers v5 syntax)
    const [price, confidence] = await cfxPrice.callStatic.getCFXPrice(priceUpdateData, {
      value: hre.ethers.utils.parseEther("0.01"),
    });

    console.log("CFX/USD Price:", hre.ethers.utils.formatUnits(price, 8)); // Pyth prices are usually in 8 decimals
    console.log("Confidence:", hre.ethers.utils.formatUnits(confidence, 8));

  } catch (error) {
    console.error("Error occurred:", error);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});