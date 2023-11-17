import type {
  ChainId,
  OnRpcRequestHandler,
  OnTransactionHandler,
} from '@metamask/snaps-types';
import { heading, panel, text } from '@metamask/snaps-ui';
import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';
import { ethers } from 'ethers';
import { ChainIds, detectAddress, detectProtocol } from './protocols';
import { parse } from 'path';
import { getChainId } from 'viem/_types/actions/public/getChainId';

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns The result of `snap_dialog`.
 * @throws If the request method is not valid for this snap.
 */
export const onRpcRequest: OnRpcRequestHandler = ({ origin, request }) => {
  switch (request.method) {
    case 'hello':
      return snap.request({
        method: 'snap_dialog',
        params: {
          type: 'confirmation',
          content: panel([
            text(`Hello, **${origin}**!`),
            text('This custom confirmation is just for display purposes.'),
            text(
              'But you can edit the snap source code to make it do something, if you want to!',
            ),
          ]),
        },
      });
    default:
      throw new Error('Method not found.');
  }
};

export const onTransaction: OnTransactionHandler = async ({
  transaction,
  chainId,
  transactionOrigin,
}) => {
  const provider = new ethers.BrowserProvider(ethereum);

  const currentGasPrice = await ethereum.request({
    method: 'eth_gasPrice',
  });

  const response = await fetch('https://beaconcha.in/api/v1/execution/gasnow');
  const insights = [
    {
      value: 'This is a transaction insight',
      transaction: JSON.stringify(transaction),
      transactionOrigin: JSON.stringify(transactionOrigin),
      chainId: JSON.stringify(chainId) as ChainIds,
    },
  ];

  const protocol = detectProtocol(transactionOrigin || '');
  const txTo = transaction.to as string;
  const snapChainId = insights[0]?.chainId as ChainId;
  const parsedChainId = snapChainId.split(':')[1]?.replace('"', '') as ChainIds;
  console.log('insights chainid', chainId);
  console.log('snap chainid', snapChainId);
  console.log('parsed chainid', parsedChainId);

  const contract = detectAddress(txTo, parsedChainId, protocol?.name || '');

  const contractName = contract?.name === 'unknown' ? txTo : contract?.name;
  return {
    content: panel([
      heading('My Transaction Insights'),
      text('Here are the insights:'),
      /*      ...insights.map((insight) => text('value: ' + insight.value)),
      ...insights.map((insight) => text('tx: ' + insight.transaction)),
      ...insights.map((insight) =>
        text('tx origin: ' + insight.transactionOrigin),
      ),
      ...insights.map((insight) => text('chainId:' + insight.chainId)),
      ...insights.map((insight) => text('currentGasPrice')),
      ...insights.map((insight) => text(currentGasPrice)),
      ...insights.map((insight) => text('blockNumber: ' + response.text)),*/
      ...insights.map((insight) => text(`protocol: ${protocol?.name} ✅`)),
      ...insights.map((insight) => text(`contract: ${contractName} ✅`)),
    ]),
  };
};
