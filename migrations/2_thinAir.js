const IsSpecialAccount = artifacts.require('IsSpecialAccount');
const ThinAir = artifacts.require('ThinAir');

const networkToAnchorWalletFactory = {
    mumbai: '0xF505469Bf06fC1C8221d1Fab089ACF5BE8E8a487',
}

module.exports = async function (deployer, network) {
    const factory = networkToAnchorWalletFactory[network];

    await deployer.deploy(IsSpecialAccount, factory);
    const isSpecialAccount = await IsSpecialAccount.deployed();

    await deployer.deploy(ThinAir, isSpecialAccount.address);
    await ThinAir.deployed();

    console.log(`Ta-da! - ThinAir deployed!`)
}