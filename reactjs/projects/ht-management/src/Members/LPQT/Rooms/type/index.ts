export type Room = {
    id?: string;
    name?: string;
    checkIn?: Date;
    checkOut?: Date;
    status?: string;
    roomType?: RoomType;
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
};
export type RoomListProps = {
    rows: any;
    searchText?: string;
    isGridView?: boolean;
    rowUser?: any;
};
export type RoomType = {
    id: string;
    roomTypeName?: string;
};

export type MenuItemType = {
    key: string;
    icon?: JSX.Element;
    label?: any;
};