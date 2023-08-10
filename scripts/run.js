
const main = async () => {
  try {
    const lottryContractFactory = await hre.ethers.getContractFactory("DecentralizedLottery");
  const minimumBet = ethers.utils.parseEther("0");
  const durationInBlocks = 10;
  
  const lotterycontract = await lottryContractFactory.deploy(minimumBet, durationInBlocks, {
    value: ethers.utils.parseEther("0.1")
  });

 await lotterycontract.deployed();
  
  console.log("Contract addy:", lotterycontract.address);

  contractBalance = await ethers.provider.getBalance(
    lotterycontract.address
  );
  console.log(
    "Contract balance:",
    ethers.utils.formatEther(contractBalance)
  );

  const enterTxn = await lotterycontract.enterLottery();
  await enterTxn.wait();

  const allPlayers = await lotterycontract.getAllPlayers();
  console.log("All Players:");
  for (let i = 0; i < allPlayers.length; i++) {
    console.log(`Player ${i + 1}:`, allPlayers[i]);
  }

  const pickWinnerTxn = await lotterycontract.pickWinner();
  await pickWinnerTxn.wait();

   contractBalance = await ethers.provider.getBalance(lotterycontract.address);
  console.log(
    "Done, Contract balance:",
    ethers.utils.formatEther(contractBalance)
  );
    
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
