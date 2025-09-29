import { IPaymentTransaction } from "@/types/payment"

export const payments: IPaymentTransaction[] = [
  {
    id: "p1",
    nameOrNumber: "John Doe",
    method: "card",
    amount: 120.5,
    status: "success",
    transactionId: "txn_001",
    date: "2025-09-27",
  },
  {
    id: "p2",
    nameOrNumber: "Alice Johnson",
    method: "paypal",
    amount: 75.0,
    status: "pending",
    transactionId: "txn_002",
    date: "2025-09-25",
  },
  {
    id: "p3",
    nameOrNumber: "B. Ndiaye",
    method: "cash",
    amount: 300.0,
    status: "failed",
    transactionId: "txn_003",
    date: "2025-09-20",
  },
]
