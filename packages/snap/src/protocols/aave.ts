import * as pools from '@bgd-labs/aave-address-book'; // wildcard import
import { getAddress } from 'ethers';

const aave = {
  name: 'Aave',
  origin: 'https://app.aave.com',
  '11155111': [
    {
      name: 'Pool-Proxy',
      address: '0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951',
    },
    {
      name: 'PoolAddressesProviderRegistry',
      address: '0x812C23640dC89FF6Cb8B5AF44a3094a94b26b93A',
    },
    {
      name: 'SupplyLogic',
      address: '0x77241299fFA12DF99Da6C3d9f195aa298955AEc6',
    },
    {
      name: 'BorrowLogic',
      address: '0x0f154441C7026eDd6A89Cc3A5fAa2f64C7335C80',
    },
    {
      name: 'LiquidationLogic',
      address: '0x2e021eead190cd55c0CEeCf308416d0bA0A8a015',
    },
    {
      name: 'EModeLogic',
      address: '0x37dc7863a743fcA4e532bBe6Dee644B87d636ea0',
    },
    {
      name: 'BridgeLogic',
      address: '0x50360e830f4cc6D9DAa1E74d2a5AD9644fD202c1',
    },
    {
      name: 'ConfiguratorLogic',
      address: '0x1f864a11E0bA69dE1a7A098cb9B44e57A02Fc68e',
    },
    {
      name: 'FlashLoanLogic',
      address: '0x5e659d4c0f8a727D00AE70f96a02c4A64f76c5Cb',
    },
    {
      name: 'PoolLogic',
      address: '0x1ce1bA9946C30b4C505631AD9E3E0342877FdE02',
    },
    {
      name: 'TreasuryProxy',
      address: '0x604264f8017fEF3b11B3dD63537CB501560380B5',
    },
    {
      name: 'Treasury-Controller',
      address: '0x7BEDcCE07B784ee3bDE746267E183b1959a28CbD',
    },
    {
      name: 'Treasury-Implementation',
      address: '0x5D1A8Da057Dca6b3473957Fa8217D82bF2C84749',
    },
    {
      name: 'Faucet-Aave',
      address: '0xC959483DBa39aa9E78757139af0e9a2EDEb3f42D',
    },
    {
      name: 'PoolAddressesProvider-Aave',
      address: '0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A',
    },
    {
      name: 'PoolDataProvider-Aave',
      address: '0x3e9708d80f7B3e43118013075F7e95CE3AB31F31',
    },
    {
      name: 'DAI-TestnetPriceAggregator-Aave',
      address: '0x9aF11c35c5d3Ae182C0050438972aac4376f9516',
    },
    {
      name: 'LINK-TestnetPriceAggregator-Aave',
      address: '0x14fC51b7df22b4D393cD45504B9f0A3002A63F3F',
    },
    {
      name: 'USDC-TestnetPriceAggregator-Aave',
      address: '0x98458D6A99489F15e6eB5aFa67ACFAcf6F211051',
    },
    {
      name: 'WBTC-TestnetPriceAggregator-Aave',
      address: '0x784B90bA1E9a8cf3C9939c2e072F058B024C4b8a',
    },
    {
      name: 'WETH-TestnetPriceAggregator-Aave',
      address: '0xDde0E8E6d3653614878Bf5009EDC317BC129fE2F',
    },
    {
      name: 'USDT-TestnetPriceAggregator-Aave',
      address: '0x4e86D3Aa271Fa418F38D7262fdBa2989C94aa5Ba',
    },
    {
      name: 'AAVE-TestnetPriceAggregator-Aave',
      address: '0xda678Ef100c13504edDb8a228A1e8e4CB139f189',
    },
    {
      name: 'EURS-TestnetPriceAggregator-Aave',
      address: '0xCbE15C1f40f1D7eE1De3756D1557d5Fdc2A50bBD',
    },
    {
      name: 'Pool-Implementation',
      address: '0x0562453c3DAFBB5e625483af58f4E6D668c44e19',
    },
    {
      name: 'PoolConfigurator-Implementation',
      address: '0x63Dea961A0B2e2dF4F7A4bb61CBc39BF53A6eb32',
    },
    {
      name: 'ReservesSetupHelper',
      address: '0x16E49256b40Ab13884A4CA83fCcC476d365159E8',
    },
    {
      name: 'ACLManager-Aave',
      address: '0x7F2bE3b178deeFF716CD6Ff03Ef79A1dFf360ddD',
    },
    {
      name: 'AaveOracle-Aave',
      address: '0x2da88497588bf89281816106C7259e31AF45a663',
    },
    {
      name: 'PoolConfigurator-Proxy-Aave',
      address: '0x7Ee60D184C24Ef7AfC1Ec7Be59A0f448A0abd138',
    },
    {
      name: 'EmissionManager',
      address: '0x098a890BAfDf6FB4ACD24bF107D20EA15D229C62',
    },
    {
      name: 'IncentivesV2-Implementation',
      address: '0xDe7562059fE64B3D088a26a3F8B60e77dCb81ebE',
    },
    {
      name: 'IncentivesProxy',
      address: '0x4DA5c4da71C5a167171cC839487536d86e083483',
    },
    {
      name: 'PullRewardsTransferStrategy',
      address: '0x45f3df824E6df2DC30Afbe25a60645066475d144',
    },
    {
      name: 'AToken-Aave',
      address: '0x48424f2779be0f03cDF6F02E17A591A9BF7AF89f',
    },
    {
      name: 'DelegationAwareAToken-Aave',
      address: '0x1d28EeE666Aa5B738BAC6426D2184a0f60D4AA2a',
    },
    {
      name: 'StableDebtToken-Aave',
      address: '0xd1CF2FBf4fb82045eE0B116eB107d29246E8DCe9',
    },
    {
      name: 'VariableDebtToken-Aave',
      address: '0x54bdE009156053108E73E2401aEA755e38f92098',
    },
    {
      name: 'ReserveStrategy-rateStrategyVolatileOne',
      address: '0xCA30c502d52F905FB3D04eE60cA48F5A1A89f8dB',
    },
    {
      name: 'ReserveStrategy-rateStrategyStableOne',
      address: '0x5CB1008969a2d5FAcE8eF32732e6A306d0D0EF2A',
    },
    {
      name: 'ReserveStrategy-rateStrategyStableTwo',
      address: '0xA813CC4d67821fbAcF24659e414A1Cf6c551373c',
    },
    {
      name: 'DAI-AToken-Aave',
      address: '0x29598b72eb5CeBd806C5dCD549490FdA35B13cD8',
    },
    {
      name: 'DAI-VariableDebtToken-Aave',
      address: '0x22675C506A8FC26447aFFfa33640f6af5d4D4cF0',
    },
    {
      name: 'DAI-StableDebtToken-Aave',
      address: '0xbEF786E742edB13361ff2f005b901A82c23AA491',
    },
    {
      name: 'LINK-AToken-Aave',
      address: '0x3FfAf50D4F4E96eB78f2407c090b72e86eCaed24',
    },
    {
      name: 'LINK-VariableDebtToken-Aave',
      address: '0x34a4d932E722b9dFb492B9D8131127690CE2430B',
    },
    {
      name: 'LINK-StableDebtToken-Aave',
      address: '0x8f7440aa789924626ab9f5687AF305da2ffB996b',
    },
    {
      name: 'USDC-AToken-Aave',
      address: '0x16dA4541aD1807f4443d92D26044C1147406EB80',
    },
    {
      name: 'USDC-VariableDebtToken-Aave',
      address: '0x36B5dE936eF1710E1d22EabE5231b28581a92ECc',
    },
    {
      name: 'USDC-StableDebtToken-Aave',
      address: '0x42A218F7bd03c63c4835496506492A383EfcF726',
    },
    {
      name: 'WBTC-AToken-Aave',
      address: '0x1804Bf30507dc2EB3bDEbbbdd859991EAeF6EefF',
    },
    {
      name: 'WBTC-VariableDebtToken-Aave',
      address: '0xEB016dFd303F19fbDdFb6300eB4AeB2DA7Ceac37',
    },
    {
      name: 'WBTC-StableDebtToken-Aave',
      address: '0xc7AEA6Cf353b4FA27aBf1b4A8D536A4e87383EB5',
    },
    {
      name: 'WETH-AToken-Aave',
      address: '0x5b071b590a59395fE4025A0Ccc1FcC931AAc1830',
    },
    {
      name: 'WETH-VariableDebtToken-Aave',
      address: '0x22a35DB253f4F6D0029025D6312A3BdAb20C2c6A',
    },
    {
      name: 'WETH-StableDebtToken-Aave',
      address: '0xEb45D5A0efF06fFb88f6A70811c08375A8de84A3',
    },
    {
      name: 'USDT-AToken-Aave',
      address: '0xAF0F6e8b0Dc5c913bbF4d14c22B4E78Dd14310B6',
    },
    {
      name: 'USDT-VariableDebtToken-Aave',
      address: '0x9844386d29EEd970B9F6a2B9a676083b0478210e',
    },
    {
      name: 'USDT-StableDebtToken-Aave',
      address: '0xEAF54fA3b1C7243033C2893c6B807f9cEaBCf0AF',
    },
    {
      name: 'AAVE-AToken-Aave',
      address: '0x6b8558764d3b7572136F17174Cb9aB1DDc7E1259',
    },
    {
      name: 'AAVE-VariableDebtToken-Aave',
      address: '0xf12fdFc4c631F6D361b48723c2F2800b84B519e6',
    },
    {
      name: 'AAVE-StableDebtToken-Aave',
      address: '0x4F15CaD6ebAE920a773bF00C6E941cccCB704915',
    },
    {
      name: 'EURS-AToken-Aave',
      address: '0xB20691021F9AcED8631eDaa3c0Cd2949EB45662D',
    },
    {
      name: 'EURS-VariableDebtToken-Aave',
      address: '0x94482C7A7477196259D8a0f74fB853277Fa5a75b',
    },
    {
      name: 'EURS-StableDebtToken-Aave',
      address: '0x08878209484D8178DD1FFA50AB1689F21aDBB856',
    },
    {
      name: 'MockFlashLoanReceiver',
      address: '0xd8A6F62302DA6C7E700E4f46ad3127278334F692',
    },
    {
      name: 'WrappedTokenGatewayV3',
      address: '0x387d311e47e80b498169e6fb51d3193167d89F7D',
    },
    {
      name: 'WalletBalanceProvider',
      address: '0xCD4e0d6D2b1252E2A709B8aE97DBA31164C5a709',
    },
    {
      name: 'UiIncentiveDataProviderV3',
      address: '0xBA25de9a7DC623B30799F33B770d31B44c2C3b77',
    },
    {
      name: 'UiPoolDataProviderV3',
      address: '0x69529987FA4A075D0C00B0128fa848dc9ebbE9CE',
    },
    {
      name: 'DAI-TestnetMintableERC20-Aave',
      address: '0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357',
    },
    {
      name: 'LINK-TestnetMintableERC20-Aave',
      address: '0xf8Fb3713D459D7C1018BD0A49D19b4C44290EBE5',
    },
    {
      name: 'USDC-TestnetMintableERC20-Aave',
      address: '0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8',
    },
    {
      name: 'WBTC-TestnetMintableERC20-Aave',
      address: '0x29f2D40B0605204364af54EC677bD022dA425d03',
    },
    {
      name: 'WETH-TestnetMintableERC20-Aave',
      address: '0xC558DBdd856501FCd9aaF1E62eae57A9F0629a3c',
    },
    {
      name: 'USDT-TestnetMintableERC20-Aave',
      address: '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0',
    },
    {
      name: 'AAVE-TestnetMintableERC20-Aave',
      address: '0x88541670E55cC00bEEFD87eB59EDd1b7C511AC9a',
    },
    {
      name: 'EURS-TestnetMintableERC20-Aave',
      address: '0x6d906e526a4e2Ca02097BA9d0caA3c382F52278E',
    },
  ],
};

const checkKeys = (aaveKey: any, address: string) => {
  let foundContract = { name: 'unknown', address };
  Object.keys(aaveKey).forEach((key) => {
    //@ts-ignore
    if (aaveKey[key] === getAddress(address)) {
      foundContract = { name: key, address };
    }
  });
  Object.keys(aaveKey.ASSETS).forEach((key) => {
    Object.keys(key).forEach((assetKey) => {
      //@ts-ignore
      if (key[assetKey] === getAddress(address)) {
        foundContract = { name: `${key}-${assetKey}`, address };
      }
    });
  });
  return foundContract;
};

export const detectAaveAddress = (address: string, chainId: string) => {
  let foundContract = { name: 'unknown', address };
  switch (chainId) {
    case '11155111':
      foundContract = checkKeys(pools.AaveV3Sepolia, address);
      break;
    case '1':
      foundContract = checkKeys(pools.AaveV3Ethereum, address);
      break;
    case '10':
      foundContract = checkKeys(pools.AaveV3Optimism, address);
      break;
    case '42161':
      foundContract = checkKeys(pools.AaveV3Arbitrum, address);
      break;
    case '137':
      foundContract = checkKeys(pools.AaveV3Polygon, address);
      break;
    case '250':
      foundContract = checkKeys(pools.AaveV3Fantom, address);
      break;
    case '43114':
      foundContract = checkKeys(pools.AaveV3Avalanche, address);
      break;
    case '1666600000':
      foundContract = checkKeys(pools.AaveV3Harmony, address);
      break;
    case '1088':
      foundContract = checkKeys(pools.AaveV3Metis, address);
      break;
    case '8453':
      foundContract = checkKeys(pools.AaveV3Base, address);
      break;
    case '100':
      foundContract = checkKeys(pools.AaveV3Gnosis, address);
      break;

    default:
      break;
  }
  return foundContract;
};

export { aave };
