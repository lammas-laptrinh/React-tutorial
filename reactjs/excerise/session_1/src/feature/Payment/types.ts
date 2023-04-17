
export interface PaymentDetails {
  cardNumber: number,
  expirationDate: Date,
  cvv: number,
  email: string,
  price?: PaymentPrice,
  promoCode?: string,
}
export interface PaymentPrice {
  id: string,
  subtotal: number,
  flatform: number,
}
export interface PaymentPriceProps {
  rows?: PaymentPrice
}
export interface PaymentDetailProps {
  rows: PaymentDetails
}


