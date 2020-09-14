export type UserType = {
  name: string;
  email: string;
  phone: string;
  college: string;
  dataScience: boolean;
  dataStructures: boolean;
  earlyBird: boolean;
  amount: string;
  paymentId: string;
};

export type PaymentVerificationType = {
  id: string;
  entity: string;
  amount: Number;
  currency: string;
  status: string;
  order_id: string;
  invoice_id: string;
  international: boolean;
  method: string;
  amount_refunded: string;
  refund_status: string;
  captured: boolean;
  description: string;
  card_id: string;
  bank: string;
  createdAt: string;
};