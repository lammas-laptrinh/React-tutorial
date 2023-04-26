
import { RoomProps } from "../type"
import { Button, Rate } from 'antd';
import { Avatar, Divider, Tooltip, DatePicker } from 'antd';
import { AntDesignOutlined, UserOutlined, CaretUpOutlined, KeyOutlined, IdcardOutlined } from '@ant-design/icons';
import { useState } from "react";
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import WifiIcon from '@mui/icons-material/Wifi';
import ScheduleIcon from '@mui/icons-material/Schedule';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Chip from "@mui/material/Chip";
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

export default function RoomInfo({ row }: RoomProps) {
    //handle Description
    const [showFullDescription, setFullDescription] = useState(false);
    const showFullDescriptionHandler = () => {
        setFullDescription(!showFullDescription);
    };
    const description = showFullDescription
        ? row.description
        : row.description?.slice(0, 90);

    //handle Day
    dayjs.extend(customParseFormat);
    const { RangePicker } = DatePicker;
    const dateFormat = 'YYYY/MM/DD';
    return (
        <div style={{ minHeight: '100vh' }}>
            {/*  this is room Detail Tittle */}
            <div style={{ fontWeight: 'bold', fontSize: 30 }}>{row.roomType} - {row.name}</div>
            {/* this is the rate Star. it had set default at 4.5 */}
            <Rate allowHalf defaultValue={4.5} />
            <Divider />
            {/*  these are the sample avatar things, i had set 7 avatars */}
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <Avatar.Group maxCount={5} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                        <Tooltip title="Ant User" placement="top">
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                        </Tooltip>
                        <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                        </Tooltip>
                        <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        </Tooltip>
                        <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#59g068' }} icon={<CaretUpOutlined />} />
                        </Tooltip>
                        <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#f24611' }} icon={<UserOutlined />} />
                        </Tooltip>
                        <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        </Tooltip>
                        <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                    </Avatar.Group>
                </div>
                {/* this is the review.count. It had set default at 32 */}
                <div style={{ flex: 1, fontWeight: 'bold', fontSize: 25, marginLeft: 400 }}>
                    32 Reviews
                </div>
            </div>
            <br />
            {/* this is Description part */}
            <div style={{ maxWidth: 780, fontSize: 20 }}>
                <div className="lead">{description}</div>
                <br />
                <div onClick={showFullDescriptionHandler} style={{ textDecoration: 'underline', color: 'blue' }}>
                    {showFullDescription ? "Thu gọn" : "Đọc thêm"}
                </div>
            </div>
            <br />
            {/* This is the box showing the benefits of the room */}
            <div style={{ maxWidth: 780, minHeight: 100, backgroundColor: '#e1eaf7', borderRadius: 15, display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 85 }}>
                    <ScheduleIcon style={{ fontSize: 50 }} />
                    <br />
                    TIME
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 85 }}>
                    <WifiIcon style={{ fontSize: 50 }} />
                    <br />
                    WIFI
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 85 }}>
                    <LocalFireDepartmentIcon style={{ fontSize: 50 }} />
                    <br />
                    HEATER
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 85 }}>
                    <FastfoodIcon style={{ fontSize: 50 }} />
                    <br />
                    FOOD
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 80 }}>
                    <FitnessCenterOutlinedIcon style={{ fontSize: 50 }} />
                    <br />
                    GYM
                </div>
            </div>
            {/*  This is User's Room Detail part */}
            <div style={{ marginTop: 95, fontSize: 20, fontWeight: 'bold' }}>
                User's Room Detail
            </div>
            <div style={{ maxWidth: 500, minHeight: 200, backgroundColor: '#e1eaf7', borderRadius: 15, display: 'flex', flexDirection: 'column', marginTop: 30 }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginTop: 10 }}>
                    <div style={{ flex: 1 }}>
                        CheckIn - CheckOut Date:
                    </div>
                    <div style={{ flex: 1 }}>
                        <RangePicker
                            style={{ minHeight: 40, maxWidth: 220 }}
                            defaultValue={[dayjs(row?.checkIn, dateFormat), dayjs(row?.checkOut, dateFormat)]}
                            format={dateFormat}
                        />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginTop: 10 }}>
                    <div style={{ flex: 1 }}>
                        Room ID
                    </div>
                    <div style={{ flex: 1 }}>
                        <Button icon={<IdcardOutlined />}>
                            {row.id}
                        </Button>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginTop: 10 }}>
                    <div style={{ flex: 1 }}>
                        Room Name:
                    </div>
                    <div style={{ flex: 1 }}>
                        <Button icon={<KeyOutlined />}>
                            {row.name}
                        </Button>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginTop: 10 }}>
                    <div style={{ flex: 1 }}>
                        Status:
                    </div>
                    <div style={{ flex: 1 }}>
                        {(row.status == 'not pay') ?
                            <Chip icon={<ClearIcon />} label={(row.status)} size="small" color="error" />
                            :
                            <Chip icon={<DoneIcon />} label={(row.status)} size="small" color='warning' />
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}