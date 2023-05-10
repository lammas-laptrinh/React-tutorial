import { Rooms } from "../Types";

export const rooms: Rooms[] = [
    {
        id: "1",
        roomName: 'Phòng 1',
        bedAmount: 3,
        checkinDate: '11/12',
        checkoutDate: '16/12',
        roomType: 'Standard',
        serviceCount: 2,
        service: ['service 1', 'service 2']
    },
    {
        id: "2",
        roomName: 'Phòng 2',
        bedAmount: 3,
        checkinDate: '18/12',
        checkoutDate: '20/12',
        roomType: 'Double',
        serviceCount: 0,
    },
    {
        id: "3",
        roomName: 'Phòng 3',
        bedAmount: 3,
        checkinDate: '18/12',
        checkoutDate: '20/12',
        roomType: 'King',
        serviceCount: 0,
    },
    {
        id: "4",
        roomName: 'Phòng 4',
        bedAmount: 3,
        checkinDate: '12/12',
        checkoutDate: '16/12',
        roomType: 'Standard',
        serviceCount: 0,
    },
    {
        id: "5",
        roomName: 'Phòng 5',
        bedAmount: 3,
        checkinDate: '12/12',
        checkoutDate: '16/12',
        roomType: 'King',
        serviceCount: 3,
        service: ['service 1', 'service 2', 'service 3']
    },
]