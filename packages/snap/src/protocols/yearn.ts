import * as pools from '@bgd-labs/aave-address-book'; // wildcard import
import { ethers, getAddress, Interface } from 'ethers';
export const yearn = {
  name: 'Yearn',
  origin: 'https://yearn.fi',
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

export const detectYearnAddress = async (
  address: string,
  chainId: string,
  provider: ethers.BrowserProvider,
  data: string,
) => {
  let foundContract = { name: 'unknown', address };
  switch (chainId) {
    case '1':
      const args: { address: string; name: string }[] = [];
      try {
        const calldata = await fetch(
          `https://api.openchain.xyz/signature-database/v1/lookup?function=${data.slice(
            0,
            10,
          )}`,
        );
        const calldataJson = await calldata.json();
        const func = calldataJson.result.function[data.slice(0, 10)].map(
          (f: { name: string }) => f.name,
        );
        const iface = new Interface([`function ${func[0]}`]);
        let details = iface.parseTransaction({
          data,
        });
        console.log('tx details', details?.args);
        if (details?.args && details.args.length > 0) {
          console.log('tx details yes yes', details.args);

          for (const arg of details?.args) {
            console.log('tx details yes yes2', arg);

            if (arg.indexOf('0x') === 0) {
              console.log('tx details yes yes3 0x', arg);
              const contract = new ethers.Contract(
                '0x5b4F3BE554a88Bd0f8d8769B9260be865ba03B4a',
                [
                  'function _assetsAddresses (address[]) public view returns (tuple[])',
                ],
                provider,
              );
              console.log('tx details yes yes4 0x contract', contract);

              console.log('tx details yes yes5 0x contract', contract);
              //@ts-ignore
              const assets = await contract._assetsAddresses([arg]);
              console.log('yes yearn', assets);
              foundContract = assets.slice(0, 20);
              //TODO return this data
              args.push({ address: arg, name: 'unknown' });
            }
          }
        }
      } catch {}
      if (
        ethers.getAddress(address) ===
        '0x8ee392a4787397126C163Cb9844d7c447da419D8'
      ) {
        return { name: 'BaseStrategy', address };
      }

      break;
    default:
      break;
  }
  return foundContract;
};
