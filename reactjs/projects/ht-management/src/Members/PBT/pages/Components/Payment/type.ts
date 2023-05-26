export interface PaymentDetailProps {
    items: PaymentDetailItemProps;
  }
  
  export interface PaymentDetailItemProps {
    roomtype: string;
    description: string;
    service: string;
    date: string;
    discount:number;
    subtotal: number;
    total: number;
  }