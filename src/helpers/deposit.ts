import { Event } from "../types";

export function hasDeposit(
  event: Event,
): event is Event & { depositPrice: number } {
  return event.depositPrice != null;
}
