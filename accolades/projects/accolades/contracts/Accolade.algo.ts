import { Contract } from '@algorandfoundation/tealscript';
import { AssetTransferTxn } from 'algosdk';

export class Accolade extends Contract {
  programVersion = 9;

  accoladeId = GlobalStateKey<uint64>();

  adminAddress = GlobalStateKey<Address>();

  createApplication(accoladeId: uint64): void {
    this.adminAddress.value = this.txn.sender;
    this.accoladeId.value = accoladeId;
  }

  addAccolade(accoladeId: uint64): void {
    assert(this.txn.sender === this.adminAddress.value);
    assert(accoladeId !== 0);

    sendAssetTransfer({
      sender: this.app.address,
      assetReceiver: this.app.address,
      assetAmount: 0,
      xferAsset: AssetID.fromUint64(accoladeId),
      fee: 1000,
      //note: "registering accolade: " + accoladeId
    });
  }

  claimAccolade(): void {
    const accoladeBalance = this.app.address.assetBalance(AssetID.fromUint64(this.accoladeId.value));
    assert(accoladeBalance > 0);

    sendAssetTransfer({
      xferAsset: AssetID.fromUint64(this.accoladeId.value),
      assetAmount: 1,
      assetReceiver: this.txn.sender,
      fee: 1000,
      //note: "Claiming accolade: " + this.accoladeId.value + " for address: " + this.txn.sender
    });
  }

  retrieveAccolade(): void {
    assert(this.txn.sender === this.adminAddress.value);
    assert(this.app.address.assetBalance(AssetID.fromUint64(this.accoladeId.value)) > 0)

    const balance = this.app.address.assetBalance(AssetID.fromUint64(this.accoladeId.value));

    sendAssetTransfer({
      xferAsset: AssetID.fromUint64(this.accoladeId.value),
      assetAmount: balance,
      assetReceiver: this.txn.sender,
      fee: 1000,
      //note: "retrieving accolade: " + this.accoladeId.value
    });
  }

  deleteApplication(): void {

  }

}
