const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory('wavePortal')
  const waveContract = await waveContractFactory.deploy()
  await waveContract.deploy()
  console.log('contract to deploy:', waveContract.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()
