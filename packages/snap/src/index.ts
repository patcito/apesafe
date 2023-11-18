import type {
  ChainId,
  OnRpcRequestHandler,
  OnTransactionHandler,
} from '@metamask/snaps-types';
import { heading, panel, text } from '@metamask/snaps-ui';
import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';
import { ethers } from 'ethers';
import {
  ChainIds,
  detectAddress,
  detectContractCreator,
  detectProtocol,
} from './protocols';

export const onTransaction: OnTransactionHandler = async ({
  transaction,
  chainId,
  transactionOrigin,
}) => {
  const provider = new ethers.BrowserProvider(ethereum);

  console.log('full tx', transaction);

  const insights = {
    value: 'This is a transaction insight',
    transaction: JSON.stringify(transaction),
    transactionOrigin: JSON.stringify(transactionOrigin),
    chainId: JSON.stringify(chainId) as ChainIds,
    creator: 'unknown',
    contractCreator: {
      address: 'unknown',
      txHash: 'unknown',
      timestamp: 'unknown',
    },
  };
  const protocol = detectProtocol(transactionOrigin || '');
  const txTo = transaction.to as string;
  const snapChainId = insights.chainId as ChainId;
  const parsedChainId = snapChainId.split(':')[1]?.replace('"', '') as ChainIds;
  console.log('insights chainid', chainId);
  console.log('snap chainid', snapChainId);
  console.log('parsed chainid', parsedChainId);

  const contract = await detectAddress(
    txTo,
    parsedChainId,
    protocol?.name || '',
    provider,
    //@ts-ignore
    transaction.data,
  );

  if (contract.address !== '') {
    const contractCreatorResponse = await detectContractCreator(
      contract.address,
      provider,
      parsedChainId,
    );
    if (contractCreatorResponse) {
      insights.contractCreator = {
        address: contractCreatorResponse.address,
        txHash: contractCreatorResponse.txHash,
        timestamp: contractCreatorResponse.timestamp,
      };
    }
  }
  let severity = 'normal';
  if (insights.contractCreator.timestamp !== 'unknown') {
    if (parseInt(insights.contractCreator.timestamp) < 2) {
      severity = 'critical';
    }
  }
  const contractName = contract?.name === 'unknown' ? txTo : contract?.name;
  const unsupported = typeof protocol?.name === 'undefined';
  return {
    content: panel([
      heading('ApeSafe Insights'),
      text(
        `protocol: ${unsupported ? '' : protocol?.name} ${
          protocol?.name !== 'unknown'
            ? unsupported
              ? 'unsupported'
              : '✅'
            : '❌'
        }`,
      ),
      text(
        `contract: ${contractName} ${
          contractName !== 'unknown' && !unsupported
            ? '✅'
            : unsupported
            ? ''
            : '❌'
        }`,
      ),
      text(
        `creator address: ${insights.contractCreator.address} ${
          contractName !== 'unknown' && !unsupported ? '✅' : ''
        }`,
      ),
      text(
        `created: ${insights.contractCreator.timestamp} days ago ${
          severity === 'critical' ? (unsupported ? '' : '❌') : '✅'
        }`,
      ),
      text(`creation tx: ${insights.contractCreator.txHash} `),
    ]),
  };
};
