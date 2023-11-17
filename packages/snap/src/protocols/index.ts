import { getAddress } from 'ethers';
import { uniswap } from './uniswap';
import { aave, detectAaveAddress } from './aave';
import { A } from '@bgd-labs/aave-address-book/dist/AaveV2EthereumAMM-6f2024b0';

export type ChainIds =
  | '1'
  | '5'
  | '42161'
  | '10'
  | '137'
  | '42220'
  | '56'
  | '8453'
  | '11155111';

const protocols = [uniswap, aave];
export const detectProtocol = (url: string) => {
  for (const protocol of protocols) {
    if (protocol.origin === url) {
      return protocol;
    }
  }
  return null;
};

export const detectAddress = (
  address: string,
  chainId: ChainIds,
  protocolName: string,
) => {
  let foundContract = { name: 'unknown', address };
  if (chainId === '8453') {
    return foundContract;
  }
  switch (protocolName) {
    case 'Aave':
      foundContract = detectAaveAddress(address, chainId);
      break;

    default:
      for (const protocol of protocols) {
        console.log('has chainId?', chainId, protocol.hasOwnProperty(chainId));

        if (protocol.hasOwnProperty(chainId)) {
          for (const contract of protocol[chainId]) {
            console.log(
              'has address?',
              getAddress(contract.address) === getAddress(address),
            );

            if (getAddress(contract.address) === getAddress(address)) {
              foundContract = contract;
            }
          }
        }
        break;
      }
  }

  return foundContract;
};
