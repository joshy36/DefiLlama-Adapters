const {staking} = require('../helper/staking')
const { gmxExports } = require('../helper/gmx')

const phoenixVaultAddress = '0xa6b88069EDC7a0C2F062226743C8985FF72bB2Eb';
const phoenixStakingAddress = '0x3c9586567a429BA0467Bc63FD38ea71bB6B912E0';
const phoenixAmpAddress = '0xca7F14F14d975bEFfEe190Cd3cD232a3a988Ab9C';

const sonicVaultAddress = '0x11944027D4eDC1C17db2D5E9020530dcEcEfb85b';
const sonicStakingAddress = '0xb382901Ff357afb612e3E239656fc5F2FDe250dc';
const sonicAmpAddress = '0xAc611438AE5F3953DeDB47c2ea8d6650D601C1B4';

const bscVaultAddress = '0xdcFaaf6f3bb71B270404992853588BE9B7fc89EA';
const bscStakingAddress = '0x9fe50b66fc34cA06BbC684fF13242d61c860F190';
const bscAmpAddress = '0x16DF3d8978d17fE725Dc307aD14FdE3B12E6Da75';

module.exports = {
  start: '2024-06-06',
  lightlink_phoenix: {
	staking: staking(phoenixStakingAddress, phoenixAmpAddress),
	tvl: gmxExports({ vault: phoenixVaultAddress, })
  },
  bsc: {
	staking: staking(bscStakingAddress, bscAmpAddress),
	tvl: gmxExports({ vault: bscVaultAddress, })
  },
  sonic: {
	staking: staking(sonicStakingAddress, sonicAmpAddress),
	tvl: gmxExports({ vault: sonicVaultAddress, })
  }
};