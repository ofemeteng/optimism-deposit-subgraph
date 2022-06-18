// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class EtherReceived extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EtherReceived entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EtherReceived must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EtherReceived", id.toString(), this);
    }
  }

  static load(id: string): EtherReceived | null {
    return changetype<EtherReceived | null>(store.get("EtherReceived", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get depositId(): BigInt {
    let value = this.get("depositId");
    return value!.toBigInt();
  }

  set depositId(value: BigInt) {
    this.set("depositId", Value.fromBigInt(value));
  }

  get emitter(): Bytes {
    let value = this.get("emitter");
    return value!.toBytes();
  }

  set emitter(value: Bytes) {
    this.set("emitter", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}