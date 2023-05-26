export interface PaymentDetailProps {
    items: RoomMain;
  }
  
  export interface RoomMain {
    code: string;
    people: number;
    request: string[];
    countRequest:number;
    startDate: string;
    endDate: string;
    roomType:string;
  }