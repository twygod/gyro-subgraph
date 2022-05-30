import { BigInt } from "@graphprotocol/graph-ts";
import {
  Deposit as DepositEvent,
  Withdraw as WithdrawEvent,
} from "../generated/Ve/Ve";

import { Deposit, Withdraw } from "../generated/schema";

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.tokenId = event.params.tokenId;
  entity.value = event.params.value;
  entity.provider = event.params.provider;
  entity.locktime = event.params.locktime;
  entity.ts = event.params.ts;

  entity.save();
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.tokenId = event.params.tokenId;
  entity.value = event.params.value;
  entity.provider = event.params.provider;
  entity.ts = event.params.ts;

  entity.save();
}
