
import ServiceBox from "./ServiceBox";
import { Link } from "react-router-dom";
import { Avatar, Card, Typography } from "antd";
import { RoomListProps } from '../type';
import '../../CSS/index.css'
import { useEffect, useState } from "react";

export default function renderRoomsAsList({ rows, rowUser }: RoomListProps) {
    const [roomsWithUser, setroomsWithUser]: any = useState();
    //Find the user that affacted the room
    useEffect(() => {
        const data = rows?.map((row: any) => {
            const usersWithMatchingRoomId = rowUser.filter((user: any) => user.roomId == row.roomId);
            const latestUser = usersWithMatchingRoomId[usersWithMatchingRoomId.length - 1];
            return { ...row, user: latestUser };
        });
        setroomsWithUser(data);
    }, []);
    //this is the List Ui if user click List View
    return roomsWithUser.map((row: any, index: any) => (
        <div className="PosRelative">
            <Link className="DecorateNone" key={index} to={`${window.location.pathname}/${row.id}`}>
                <Card className="card" style={{ marginTop: 20 }}>
                    <div className="Bold">{row.name}</div>
                    {
                        (row?.user?.statusId == '1') ?
                            (
                                <div className="top40">
                                    <Avatar src={row?.user?.user?.avatar} className="AvatarMainSmall"></Avatar>
                                    {
                                        row.user ? (
                                            <Typography className="GridDate">
                                                {new Date(row?.user?.checkIn?.seconds * 1000).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' })}
                                                -
                                                {new Date(row?.user?.checkOut?.seconds * 1000).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' })}
                                            </Typography >
                                        ) :
                                            (
                                                <Typography className="GridDate">
                                                    Error Detected
                                                </Typography >
                                            )
                                    }
                                </div>
                            ) :
                            (
                                <Typography className="GridDate">
                                    Phòng Trống
                                </Typography >
                            )
                    }
                </Card>
            </Link>
            {(row.statusId == 1) && <ServiceBox />}
        </div>
    ));
};