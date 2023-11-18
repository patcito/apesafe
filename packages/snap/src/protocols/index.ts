import { ethers, getAddress } from 'ethers';
import { uniswap } from './uniswap';
import { aave, detectAaveAddress } from './aave';
import { A } from '@bgd-labs/aave-address-book/dist/AaveV2EthereumAMM-6f2024b0';
import { detectYearnAddress, yearn } from './yearn';
import { curve } from './curve';
import { mevdotio } from './mevdotio';
export interface EtherscanContractCreationResponse {
  nooption?: boolean;
  status: string;
  message: string;
  result: EtherscanContractCreationResult[];
}

export interface EtherscanContractCreationResult {
  contractAddress: string;
  contractCreator: string;
  txHash: string;
}
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

function daysSinceTimestampInSeconds(timestampInSeconds: number): number {
  // Convert seconds to milliseconds
  const timestampInMillis = timestampInSeconds * 1000;

  // Get the current timestamp in milliseconds
  const currentTimestamp = new Date().getTime();

  // Calculate the time difference in milliseconds
  const timeDifference = currentTimestamp - timestampInMillis;

  // Convert milliseconds to days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

const protocols = [uniswap, aave, yearn, curve, mevdotio];
export const detectProtocol = (url: string) => {
  for (const protocol of protocols) {
    if (protocol.origin === url) {
      return protocol;
    }
  }
  return null;
};
export const detectContractCreator = async (
  address: string,
  provider: ethers.BrowserProvider,
  chainId: string,
) => {
  let fetchUrl = `http://localhost:3004/getinfo?address=${address}&chainId=${chainId}`;
  let contractCreatorAddressResponse = await fetch(fetchUrl);
  const json =
    (await contractCreatorAddressResponse.json()) as EtherscanContractCreationResponse;
  if (json.nooption) {
    return;
  }
  console.log('json', json);
  console.log('yes results 0', json?.result[0]);

  if (json?.result?.length > 0 && json.result[0]) {
    console.log('yes results ', json?.result[0]);
    let ens = null;
    if (chainId === '1') {
      ens = await provider.lookupAddress(json.result[0].contractCreator);
    }
    console.log('yes ens', ens);

    const address = ens || json.result[0].contractCreator;
    const txHash = json.result[0].txHash as string;
    const tx = await provider.getTransaction(txHash);

    let timestamp = 'unknown';
    if (tx?.blockNumber) {
      const block = await provider.getBlock(tx?.blockNumber);
      if (block?.timestamp)
        timestamp = daysSinceTimestampInSeconds(block.timestamp).toString();
    }
    console.log('yes timestamp', timestamp);

    return { address, txHash, timestamp };
  }
};
export const detectAddress = async (
  address: string,
  chainId: ChainIds,
  protocolName: string,
  provider: ethers.BrowserProvider,
  data: string,
) => {
  let foundContract = { name: 'unknown', address };
  if (chainId === '8453') {
    return foundContract;
  }
  switch (protocolName) {
    case 'Aave':
      foundContract = detectAaveAddress(address, chainId);
      break;
    case 'Yearn':
      foundContract = await detectYearnAddress(
        address,
        chainId,
        provider,
        data,
      );
      break;
    default:
      console.log('enter default');

      for (const protocol of protocols) {
        console.log(
          'has chainId?',
          chainId,
          protocol.hasOwnProperty(chainId),
          protocol.name,
          protocolName,
          protocols,
        );

        if (
          protocol.hasOwnProperty(chainId) &&
          protocolName === protocol.name
        ) {
          //@ts-ignore
          for (const contract of protocol[chainId]) {
            console.log(
              'has address?',
              getAddress(contract.address) === getAddress(address),
              getAddress(contract.address),
              getAddress(address),
            );

            if (getAddress(contract.address) === getAddress(address)) {
              foundContract = contract;
            }
          }
        }
      }
  }

  return foundContract;
};
