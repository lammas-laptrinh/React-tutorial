export interface PaymentDetailProps {
  items: PaymentDetailItemProps;
}

export interface PaymentDetailItemProps {
  email: string;
  card_number: string;
  expiry_date: string;
  CVV: string;
  subtotal: number;
  platfrom: number;
  total: number;
}
export interface PaymentIntroduce {
  title: string;
  professtional_plan: string;
  introduce_1: string;
  introduce_2: string;
  introduce_3: string;
  introduce_4: string;
  modify_plan: string;
}
