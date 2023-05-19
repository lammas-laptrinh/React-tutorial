export type Rooms = {
    description?: any;
    id: any;
    roomName: string;
    bedAmount: number;
    checkinDate: string;
    checkoutDate: string;
    roomType: string;
    serviceCount: number;
    service?: string[];
    status?:string;
};
export type RoomProps = {
    row: Rooms;
};