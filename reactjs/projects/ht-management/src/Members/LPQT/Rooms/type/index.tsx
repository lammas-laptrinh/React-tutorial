export type Room = {
    id?: string;
    name?: string;
    checkIn?: Date;
    checkOut?: Date;
    status?: string;
    roomType?: string;
    img?: string;
    description?: string;
    serviceCount?: number;
    service?: Service[]
};
export type Service = {
    id: string;
    serviceType?: ServiceType;
    detail?: string;
    roomId?: string;
};
export type ServiceType = {
    id: string;
    serviceTypeName?: string;
};

export type RoomProps = {
    row: Room;
    isClick?: boolean
};
export type RoomListProps = {
    rows: Room[];
    searchText?: string;
    isGridView?: boolean;
};
export type MenuItemType = {
    key: string;
    icon?: JSX.Element;
    label?: any;
};
