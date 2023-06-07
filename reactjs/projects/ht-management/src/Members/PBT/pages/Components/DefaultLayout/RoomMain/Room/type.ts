export interface PaymentDetailProps {
    items: RoomMain;
  }
  
  export interface RoomMain {
    code: string;
    people: number;
    request: string[];
    userRequestData:string[];
    userRequestCount:number;
    startDate: string;
    endDate: string;
    roomType:string;
  }