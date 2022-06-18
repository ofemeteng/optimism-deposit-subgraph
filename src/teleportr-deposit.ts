import {
  EtherReceived as EtherReceivedEvent
} from "../generated/TeleportrDeposit/TeleportrDeposit"
import { EtherReceived } from "../generated/schema"

export function handleEtherReceived(event: EtherReceivedEvent): void {
  // Create a EtherReceived entity, using the hexadecimal string representation
  // of the transaction hash as the entity ID
  let id = event.transaction.hash.toHex()
  let EtherReceivedEntity = new EtherReceived(id)

  // Set properties on the EtherReceivedEntity, using the event parameters
  EtherReceivedEntity.depositId = event.params.depositId
  EtherReceivedEntity.emitter = event.params.emitter
  EtherReceivedEntity.amount = event.params.amount

  // Save the EtherReceivedEntity to the store
  EtherReceivedEntity.save()
}