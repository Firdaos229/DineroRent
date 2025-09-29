export interface IPaymentTransaction {
  id: string
  nameOrNumber: string
  method: "card" | "cash" | "paypal" | "bank"
  amount: number
  status: "success" | "failed" | "pending"
  transactionId: string
  date: string 
}
