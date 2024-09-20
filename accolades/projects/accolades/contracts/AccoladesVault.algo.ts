import { Contract } from '@algorandfoundation/tealscript';

export class AccoladesVault extends Contract {
  programVersion = 9;

  registeredAccolades = GlobalStateKey<uint64>();

  accolades = GlobalStateKey<StaticArray<uint64, 500>>();

  adminAddress = GlobalStateKey<Address>();

  claimedAccolades = LocalStateKey<StaticArray<uint64, 500>>();
  numClaimedAccolades = LocalStateKey<uint64>();

  createApplication(...args: any[]): void {
    this.adminAddress.value = this.txn.sender;
    this.registeredAccolades.value = 0;
  }

  private accoladeAlreadyRegisteredCheck(assetId: uint64): void {
    this.accolades.value.forEach((id) => {
      assert(id !== assetId);
    });
  }
  private accoladeRegisteredCheck(assetId: uint64): void {
    this.accolades.value.forEach((id) => {
      assert(id === assetId);
    });
  }

  private accoladeAlreadyClaimedCheck(assetId: uint64): void {
    this.claimedAccolades(this.txn.sender).value.forEach((id) => {
      assert(id !== assetId);
    });
  };

  registerAccolade(assetId: uint64): void {
    assert(this.txn.sender === this.adminAddress.value);
    this.accoladeAlreadyRegisteredCheck(assetId);
    assert(assetId !== 0);

    sendAssetTransfer({
      sender: this.app.address,
      assetReceiver: this.app.address,
      assetAmount: 0,
      xferAsset: AssetID.fromUint64(assetId),
      fee: 1000,
      note: "registering accolade: " + assetId
    })
    this.accolades.value[this.registeredAccolades.value] = assetId;
    this.registeredAccolades.value = this.registeredAccolades.value + 1;

  }

  optInToApplication(...args: any[]): void {
    this.numClaimedAccolades(this.txn.sender).value = 0;
  }

  claimAccolade(assetId: uint64): void {
    this.accoladeRegisteredCheck(assetId);
    this.accoladeAlreadyClaimedCheck(assetId);

    sendAssetTransfer({
      sender: this.app.address,
      assetReceiver: this.txn.sender,
      assetAmount: 0,
      xferAsset: AssetID.fromUint64(assetId),
      fee: 1000,
      note: "claiming accolade: " + assetId + " for account: " + this.txn.sender
    })

    this.claimedAccolades(this.txn.sender).value[this.numClaimedAccolades(this.txn.sender).value] = assetId;
    this.numClaimedAccolades(this.txn.sender).value = this.numClaimedAccolades(this.txn.sender).value + 1;  
  }

  retrieveAccolade(assetId: uint64): void {
    assert(this.txn.sender === this.adminAddress.value);
    assert(this.registeredAccolades.value > 0);
    assert(this.app.address.assetBalance(AssetID.fromUint64(assetId)) > 0)

    const balance = this.app.address.assetBalance(AssetID.fromUint64(assetId));

    sendAssetTransfer({
      xferAsset: AssetID.fromUint64(assetId),
      assetAmount: balance,
      assetReceiver: this.txn.sender,
      fee: 1000,
      note: "retrieving accolade: " + assetId
    });
    
    this.registeredAccolades.value = this.registeredAccolades.value - 1;
    this.accolades.value[this.registeredAccolades.value] = 0;
  }

}
