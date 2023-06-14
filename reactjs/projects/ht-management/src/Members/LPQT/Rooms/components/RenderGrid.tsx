import { Link } from "react-router-dom";
import { Avatar, Card, Typography } from "antd";
import { RoomListProps } from "../type";
import ServiceBox from "./ServiceBox";
import '../../CSS/index.css'
import { useEffect, useState } from "react";

export default function renderRoomsAsGrid({ rows, rowUser }: RoomListProps) {
    const [roomsWithUser, setroomsWithUser]: any = useState();
    //Find the user that affacted the room
    useEffect(() => {
        const data = rows?.map((row: any) => {
            const usersWithMatchingRoomId = rowUser.filter((user: any) => user.roomId == row.roomId);
            const latestUser = usersWithMatchingRoomId[usersWithMatchingRoomId.length - 1];
            console.log('latestUser for roomId', row.roomId, ':', latestUser);
            return { ...row, user: latestUser };
        });
        setroomsWithUser(data);
    }, []);
    console.log('setroomsWithUser', roomsWithUser)
    //this is the Grid Ui if user click Grid View
    return (
        roomsWithUser?.map((row: any, index: any) => (
            <div
                className="GridContainer"
                key={index}
            >
                <Link className="DecorateNone" to={`${window.location.pathname}/${row?.roomId}`}>
                    <Card className="Card" hoverable>
                        <Typography className="GridName">
                            {row?.name}
                        </Typography>
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
                {(row?.statusId == 1) && <ServiceBox />}
            </div >
        ))
    );
}
