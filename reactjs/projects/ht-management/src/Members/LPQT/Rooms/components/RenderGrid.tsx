import { Link } from "react-router-dom";
import { Avatar, Card, Typography } from "antd";
import { RoomListProps } from "../type";
import ServiceBox from "./ServiceBox";
import '../../CSS/index.css'

export default function renderRoomsAsGrid({ rows }: RoomListProps) {
    //this is the Grid Ui if user click Grid View
    return (
        rows.map((row: any, index: any) => (
            <div
                className="GridContainer"
                key={index}
            >
                <Link className="DecorateNone" to={`${window.location.pathname}/${row.roomTypeId}`}>
                    <Card className="Card" hoverable>
                        <Typography className="GridName">
                            {row.name}
                        </Typography>
                        {
                            (row.statusId == 3) ?
                                (
                                    <div className="top40">
                                        {Array(3).fill(null).map((_, i) => (
                                            <Avatar key={i} className="AvatarMain"></Avatar>
                                        ))}
                                        <Typography className="GridDate">
                                            {row.checkIn?.toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric' })} - {row.checkOut?.toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric' })}
                                        </Typography >
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
                {(row.statusId == 3) && <ServiceBox />}
            </div >
        ))
    );
}
