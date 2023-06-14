export type Rooms = {
    id: any;
    roomName: string;
    bedAmount: number;
    checkinDate: string;
    checkoutDate: string;
    roomType: string;
    serviceCount: number;
    service?: string[];
};

export type DesRoom={
    id: any;
    checkinDate: string;
    checkoutDate: string;
    roomType: string;
    des: string;
    review : string;
}
