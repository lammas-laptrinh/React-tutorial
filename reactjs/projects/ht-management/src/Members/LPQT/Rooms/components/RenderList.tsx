
import ServiceBox from "./ServiceBox";
import { Link } from "react-router-dom";
import { Avatar, Card, Typography } from "antd";
import { RoomListProps } from '../type';
import '../../CSS/index.css'

export default function renderRoomsAsList({ rows }: RoomListProps) {
    //this is the List Ui if user click List View
    return rows.map((row, index) => (
        <div className="PosRelative">
            <Link className="DecorateNone" key={index} to={`${window.location.pathname}/${row.id}`}>
                <Card className="card" hoverable>
                    <div className="Bold">{row.name}</div>
                    {
                        (row.status == "paid") ?
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
            {/*  Service notify only appear only if serviceCount > 0 */}
            {row?.serviceCount! > 0 &&
                <ServiceBox row={row} />
            }
        </div>
    ));
};