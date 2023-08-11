const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();
  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());
  const lottryContractFactory = await hre.ethers.getContractFactory("DecentralizedLottery");
  const minimumBet = ethers.utils.parseEther("0");
  const durationInBlocks = 10;
  const lotterycontract = await lottryContractFactory.deploy(minimumBet, durationInBlocks, {
    value: ethers.utils.parseEther("0.001")
  });
  await lotterycontract.deployed();
  console.log("Contract addy:", lotterycontract.address);
  const enterTxn = await lotterycontract.enterLottery();
  await enterTxn.wait();
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();