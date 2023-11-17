const uniswap = {
  origin: 'https://app.uniswap.org',
  name: 'Uniswap',
  //https://github.com/Uniswap/v3-staker/releases/tag/v1.0.2
  '11155111': [],
  '1': [
    { address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', name: 'WETH' },
    {
      address: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
      name: 'UniswapV3Factory',
    },
    {
      address: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
      name: 'Multicall2',
    },
    {
      address: '0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2',
      name: 'ProxyAdmin',
    },
    { address: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573', name: 'TickLens' },
    { address: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6', name: 'Quoter' },
    {
      address: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
      name: 'SwapRouter',
    },
    {
      address: '0x42B24A95702b9986e82d421cC3568932790A48Ec',
      name: 'NFTDescriptor',
    },
    {
      address: '0x91ae842A5Ffd8d12023116943e72A606179294f3',
      name: 'NonfungibleTokenPositionDescriptor',
    },
    {
      address: '0xEe6A57eC80ea46401049E92587E52f5Ec1c24785',
      name: 'TransparentUpgradeableProxy',
    },
    {
      address: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
      name: 'NonfungiblePositionManager',
    },
    {
      address: '0xA5644E29708357803b5A882D272c41cC0dF92B34',
      name: 'V3Migrator',
    },
    { address: '0x61fFE014bA17989E743c5F6cB21bF9697530B21e', name: 'QuoterV2' },
    {
      address: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
      name: 'SwapRouter02',
    },
    { address: '0x000000000022d473030f116ddee9f6b43ac78ba3', name: 'Permit2' },
    {
      address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
      name: 'UniversalRouter',
    },
  ],
  '5': [
    { address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', name: 'WETH' },
    {
      address: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
      name: 'UniswapV3Factory',
    },
    {
      address: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
      name: 'Multicall2',
    },
    {
      address: '0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2',
      name: 'ProxyAdmin',
    },
    { address: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573', name: 'TickLens' },
    { address: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6', name: 'Quoter' },
    {
      address: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
      name: 'SwapRouter',
    },
    {
      address: '0x42B24A95702b9986e82d421cC3568932790A48Ec',
      name: 'NFTDescriptor',
    },
    {
      address: '0x91ae842A5Ffd8d12023116943e72A606179294f3',
      name: 'NonfungibleTokenPositionDescriptor',
    },
    {
      address: '0xEe6A57eC80ea46401049E92587E52f5Ec1c24785',
      name: 'TransparentUpgradeableProxy',
    },
    {
      address: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
      name: 'NonfungiblePositionManager',
    },
    {
      address: '0xA5644E29708357803b5A882D272c41cC0dF92B34',
      name: 'V3Migrator',
    },
    { address: '0x61fFE014bA17989E743c5F6cB21bF9697530B21e', name: 'QuoterV2' },
    {
      address: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
      name: 'SwapRouter02',
    },
    { address: '0x000000000022d473030f116ddee9f6b43ac78ba3', name: 'Permit2' },
    {
      address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
      name: 'UniversalRouter',
    },
  ],
  '42161': [
    { address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', name: 'WETH' },
    {
      address: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
      name: 'UniswapV3Factory',
    },
    {
      address: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
      name: 'Multicall2',
    },
    {
      address: '0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2',
      name: 'ProxyAdmin',
    },
    { address: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573', name: 'TickLens' },
    { address: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6', name: 'Quoter' },
    {
      address: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
      name: 'SwapRouter',
    },
    {
      address: '0x42B24A95702b9986e82d421cC3568932790A48Ec',
      name: 'NFTDescriptor',
    },
    {
      address: '0x91ae842A5Ffd8d12023116943e72A606179294f3',
      name: 'NonfungibleTokenPositionDescriptor',
    },
    {
      address: '0xEe6A57eC80ea46401049E92587E52f5Ec1c24785',
      name: 'TransparentUpgradeableProxy',
    },
    {
      address: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
      name: 'NonfungiblePositionManager',
    },
    {
      address: '0xA5644E29708357803b5A882D272c41cC0dF92B34',
      name: 'V3Migrator',
    },
    { address: '0x61fFE014bA17989E743c5F6cB21bF9697530B21e', name: 'QuoterV2' },
    {
      address: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
      name: 'SwapRouter02',
    },
    { address: '0x000000000022d473030f116ddee9f6b43ac78ba3', name: 'Permit2' },
    {
      address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
      name: 'UniversalRouter',
    },
  ],
  '10': [
    { address: '0x4200000000000000000000000000000000000006', name: 'WETH' },
    {
      address: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
      name: 'UniswapV3Factory',
    },
    {
      address: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
      name: 'Multicall2',
    },
    {
      address: '0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2',
      name: 'ProxyAdmin',
    },
    { address: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573', name: 'TickLens' },
    { address: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6', name: 'Quoter' },
    {
      address: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
      name: 'SwapRouter',
    },
    {
      address: '0x42B24A95702b9986e82d421cC3568932790A48Ec',
      name: 'NFTDescriptor',
    },
    {
      address: '0x91ae842A5Ffd8d12023116943e72A606179294f3',
      name: 'NonfungibleTokenPositionDescriptor',
    },
    {
      address: '0xEe6A57eC80ea46401049E92587E52f5Ec1c24785',
      name: 'TransparentUpgradeableProxy',
    },
    {
      address: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
      name: 'NonfungiblePositionManager',
    },
    {
      address: '0xA5644E29708357803b5A882D272c41cC0dF92B34',
      name: 'V3Migrator',
    },
    { address: '0x61fFE014bA17989E743c5F6cB21bF9697530B21e', name: 'QuoterV2' },
    {
      address: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
      name: 'SwapRouter02',
    },
    { address: '0x000000000022d473030f116ddee9f6b43ac78ba3', name: 'Permit2' },
    {
      address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
      name: 'UniversalRouter',
    },
    {
      address: '0xeC8B0F7Ffe3ae75d7FfAb09429e3675bb63503e4',
      name: 'UniversalRouter2',
    },
  ],
  '137': [
    { address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', name: 'WETH' },
    {
      address: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
      name: 'UniswapV3Factory',
    },
    {
      address: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
      name: 'Multicall2',
    },
    {
      address: '0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2',
      name: 'ProxyAdmin',
    },
    { address: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573', name: 'TickLens' },
    { address: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6', name: 'Quoter' },
    {
      address: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
      name: 'SwapRouter',
    },
    {
      address: '0x42B24A95702b9986e82d421cC3568932790A48Ec',
      name: 'NFTDescriptor',
    },
    {
      address: '0x91ae842A5Ffd8d12023116943e72A606179294f3',
      name: 'NonfungibleTokenPositionDescriptor',
    },
    {
      address: '0xEe6A57eC80ea46401049E92587E52f5Ec1c24785',
      name: 'TransparentUpgradeableProxy',
    },
    {
      address: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
      name: 'NonfungiblePositionManager',
    },
    {
      address: '0xA5644E29708357803b5A882D272c41cC0dF92B34',
      name: 'V3Migrator',
    },
    { address: '0x61fFE014bA17989E743c5F6cB21bF9697530B21e', name: 'QuoterV2' },
    {
      address: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
      name: 'SwapRouter02',
    },
    { address: '0x000000000022d473030f116ddee9f6b43ac78ba3', name: 'Permit2' },
    {
      address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
      name: 'UniversalRouter',
    },
  ],
  '42220': [
    { address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', name: 'WETH' },
    {
      address: '0xAfE208a311B21f13EF87E33A90049fC17A7acDEc',
      name: 'UniswapV3Factory',
    },
    {
      address: '0x633987602DE5C4F337e3DbF265303A1080324204',
      name: 'Multicall2',
    },
    {
      address: '0xc1b262Dd7643D4B7cA9e51631bBd900a564BF49A',
      name: 'ProxyAdmin',
    },
    { address: '0x5f115D9113F88e0a0Db1b5033D90D4a9690AcD3D', name: 'TickLens' },
    { address: '0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8', name: 'Quoter' },
    {
      address: '0x5615CDAb10dc425a742d643d949a7F474C01abc4',
      name: 'SwapRouter',
    },
    {
      address: '0xa9Fd765d85938D278cb0b108DbE4BF7186831186',
      name: 'NFTDescriptor',
    },
    {
      address: '0x644023b316bB65175C347DE903B60a756F6dd554',
      name: 'NonfungibleTokenPositionDescriptor',
    },
    {
      address: '0x505B43c452AA4443e0a6B84bb37771494633Fde9',
      name: 'TransparentUpgradeableProxy',
    },
    {
      address: '0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A',
      name: 'NonfungiblePositionManager',
    },
    {
      address: '0x3cFd4d48EDfDCC53D3f173F596f621064614C582',
      name: 'V3Migrator',
    },
    { address: '0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8', name: 'QuoterV2' },
    {
      address: '0x5615CDAb10dc425a742d643d949a7F474C01abc4',
      name: 'SwapRouter02',
    },
    { address: '0x000000000022d473030f116ddee9f6b43ac78ba3', name: 'Permit2' },
    {
      address: '0x5Dc88340E1c5c6366864Ee415d6034cadd1A9897',
      name: 'UniversalRouter',
    },
    {
      address: '0x643770E279d5D0733F21d6DC03A8efbABf3255B4',
      name: 'UniversalRouter2',
    },
  ],
  '56': [
    {
      name: 'UniswapV3Factory',
      address: '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7',
    },
    {
      name: 'Multicall2',
      address: '0x963Df249eD09c358A4819E39d9Cd5736c3087184',
    },
    {
      name: 'ProxyAdmin',
      address: '0xC9A7f5b73E853664044ab31936D0E6583d8b1c79',
    },
    { name: 'TickLens', address: '0xD9270014D396281579760619CCf4c3af0501A47C' },
    {
      name: 'NFTDescriptor',
      address: '0x831d93E55AF23A2977E4DA892d5005f4F2995071',
    },
    {
      name: 'NonfungibleTokenPositionDescriptor',
      address: '0x0281E98322e4e8E53491D576Ee6A2BFCE644C55C',
    },
    {
      name: 'TransparentUpgradeableProxy',
      address: '0xAec98e489AE35F243eB63452f6ad233A6c97eE97',
    },
    {
      name: 'NonfungiblePositionManager',
      address: '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613',
    },
    {
      name: 'V3Migrator',
      address: '0x32681814957e0C13117ddc0c2aba232b5c9e760f',
    },
    { name: 'QuoterV2', address: '0x78D78E420Da98ad378D7799bE8f4AF69033EB077' },
    {
      name: 'SwapRouter02',
      address: '0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2',
    },
    { name: 'Permit2', address: '0x000000000022d473030f116ddee9f6b43ac78ba3' },
    {
      name: 'UniversalRouter',
      address: '0x5302086A3a25d473aAbBd0356eFf8Dd811a4d89B',
    },
    {
      address: '0xeC8B0F7Ffe3ae75d7FfAb09429e3675bb63503e4',
      name: 'UniversalRouter2',
    },
  ],
  '8453': [
    { address: '0x4200000000000000000000000000000000000006', name: 'WETH' },
    {
      name: 'UniswapV3Factory',
      address: '0x33128a8fC17869897dcE68Ed026d694621f6FDfD',
    },
    {
      name: 'Multicall2',
      address: '0x091e99cb1C49331a94dD62755D168E941AbD0693',
    },
    {
      name: 'ProxyAdmin',
      address: '0x3334d83e224aF5ef9C2E7DDA7c7C98Efd9621fA9',
    },
    { name: 'TickLens', address: '0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d' },
    { name: 'Quoter', address: '' },
    { name: 'SwapRouter', address: '' },
    {
      name: 'NFTDescriptor',
      address: '0xF9d1077fd35670d4ACbD27af82652a8d84577d9F',
    },
    {
      name: 'NonfungibleTokenPositionDescriptor',
      address: '0x4f225937EDc33EFD6109c4ceF7b560B2D6401009',
    },
    {
      name: 'TransparentUpgradeableProxy',
      address: '0x4615C383F85D0a2BbED973d83ccecf5CB7121463',
    },
    {
      name: 'NonfungiblePositionManager',
      address: '0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1',
    },
    {
      name: 'V3Migrator',
      address: '0x23cF10b1ee3AdfCA73B0eF17C07F7577e7ACd2d7',
    },
    { name: 'QuoterV2', address: '0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a' },
    {
      name: 'SwapRouter02',
      address: '0x2626664c2603336E57B271c5C0b26F421741e481',
    },
    { name: 'Permit2', address: '0x000000000022D473030F116dDEE9F6B43aC78BA3' },
    {
      name: 'UniversalRouter',
      address: '0x198EF79F1F515F02dFE9e3115eD9fC07183f02fC',
    },
  ],
};

export { uniswap };
