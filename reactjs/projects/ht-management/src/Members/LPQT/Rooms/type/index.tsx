export type Room = {
    id?: string;
    name?: string;
    checkIn?: Date;
    checkOut?: Date;
    status?: string;
    roomType?: string;
    img?: string;
    description?: string;
};
export type RoomProps = {
    row: Room;
};
export type RoomListProps = {
    rows: Room[];
    searchText: string;
    isGridView: boolean;
};
