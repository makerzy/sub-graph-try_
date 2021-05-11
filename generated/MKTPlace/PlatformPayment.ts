// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class PlatformPayment__getPlatformCutResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class PlatformPayment extends ethereum.SmartContract {
  static bind(address: Address): PlatformPayment {
    return new PlatformPayment("PlatformPayment", address);
  }

  getPlatformCut(_auctionId: Bytes): PlatformPayment__getPlatformCutResult {
    let result = super.call(
      "getPlatformCut",
      "getPlatformCut(bytes32):(uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromFixedBytes(_auctionId)]
    );

    return new PlatformPayment__getPlatformCutResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_getPlatformCut(
    _auctionId: Bytes
  ): ethereum.CallResult<PlatformPayment__getPlatformCutResult> {
    let result = super.tryCall(
      "getPlatformCut",
      "getPlatformCut(bytes32):(uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromFixedBytes(_auctionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PlatformPayment__getPlatformCutResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }
}
