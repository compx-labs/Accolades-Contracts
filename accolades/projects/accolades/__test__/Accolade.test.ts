import { describe, test, expect, beforeAll, beforeEach } from '@jest/globals';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import * as algokit from '@algorandfoundation/algokit-utils';
import { AccoladeClient } from '../contracts/clients/AccoladeClient';
import { makeBasicAccountTransactionSigner, makePaymentTxnWithSuggestedParamsFromObject } from 'algosdk';
import { TransactionSignerAccount } from '@algorandfoundation/algokit-utils/types/account';

const fixture = algorandFixture();
algokit.Config.configure({ populateAppCallResources: true });

let appClient: AccoladeClient;
let accoladeAssetId: bigint;
let admin: string;
let claimer: TransactionSignerAccount;

describe('AccoladesVault', () => {
  beforeEach(fixture.beforeEach);

  beforeAll(async () => {
    await fixture.beforeEach();
    const { testAccount } = fixture.context;
    const { algorand } = fixture;

    appClient = new AccoladeClient(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algorand.client.algod
    );

    admin = testAccount.addr;
    await algokit.ensureFunded(
      {
        accountToFund: admin,
        fundingSource: await algokit.getDispenserAccount(algorand.client.algod, algorand.client.kmd!),
        minSpendingBalance: algokit.algos(20),
      },
      algorand.client.algod,
    )

    const accoladeAssetCreate = algorand.send.assetCreate({
      sender: admin,
      total: 1000n,
      decimals: 0,
      assetName: 'Accolade Token',
    });
    accoladeAssetId = BigInt((await accoladeAssetCreate).confirmation.assetIndex!);

    await appClient.create.createApplication({
      accoladeId: accoladeAssetId,
    });
  });

  test('should add an accolade', async () => {
    const { appAddress } = await appClient.appClient.getAppReference();
    const { algorand } = fixture;
    const sp = await algorand.client.algod.getTransactionParams().do();

    await algorand.send.payment({
      amount: algokit.algos(10),
      receiver: appAddress,
      sender: admin,
    });

    await appClient.addAccolade({
      accoladeId: accoladeAssetId,
    });

    await algorand.send.assetTransfer({
      sender: admin,
      amount: 10n,
      receiver: appAddress,
      assetId: accoladeAssetId,
    });

    const { balance: assetBalance } = await algorand.account.getAssetInformation(appAddress, accoladeAssetId);
    expect(assetBalance).toBe(10n);
  });

  test('should claim an accolade', async () => {
    const { algorand } = fixture;
    const { appAddress } = await appClient.appClient.getAppReference();

    const { balance } = await algorand.account.getAssetInformation(appAddress, accoladeAssetId);
    expect(balance).toBe(10n);

    claimer = await fixture.context.generateAccount({ initialFunds: algokit.algos(10) });
    await algorand.send.assetTransfer({
      sender: claimer.addr,
      amount: 0n,
      receiver: claimer.addr,
      assetId: accoladeAssetId,
    });
    await appClient.claimAccolade({}, {sender: claimer, sendParams: {fee: algokit.microAlgos(1000)}});
    const { balance: assetBalance } = await algorand.account.getAssetInformation(claimer.addr, accoladeAssetId);
    expect(assetBalance).toBe(1n);
  });

});