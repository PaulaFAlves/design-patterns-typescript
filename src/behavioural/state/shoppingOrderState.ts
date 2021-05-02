export interface ShoppingOrderState {
  getName(): string
  waitPayment(): void
  rejectPayment(): void
  cancelOrder(): void
  approveOrder(): void
  sentOrder(): void
  finishOrder(): void
}
