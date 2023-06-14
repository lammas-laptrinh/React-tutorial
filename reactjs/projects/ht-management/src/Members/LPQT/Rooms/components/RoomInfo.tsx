
import { Button, Dropdown, Rate, Space } from 'antd';
import { Avatar, Divider, Tooltip, DatePicker } from 'antd';
import {
    AntDesignOutlined, UserOutlined, CaretUpOutlined, KeyOutlined, TagOutlined,
    IdcardOutlined, CaretDownOutlined, CheckCircleOutlined, CloseSquareOutlined
} from '@ant-design/icons';
import { useState } from "react";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import '../../CSS/index.css';
import RoomBenefit from '../../../LPQT/assets/images/RoomBenefits.png'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';



export default function RoomInfo({ row, roomId }: any) {
    //dropitem for RoomDetail info
    const items: any['items'] = [
        {
            label: row?.name,
            key: row?.roomTypeId,
            icon: <TagOutlined />,
        },
    ];
    const items1: any['items'] = [
        {
            label: 'Adult 2',
            key: '2',
            icon: <UserOutlined />,
        },
    ];
    const menuProps = {
        items
    };
    const menuProps1: any = {
        items: items1
    };
    const navigate = useNavigate()
    //handle Description
    const [showFullDescription, setFullDescription] = useState(false);
    const showFullDescriptionHandler = () => {
        setFullDescription(!showFullDescription);
    };
    const description = showFullDescription
        ? row?.description
        : row?.description?.slice(0, 90);

    //handle Day
    dayjs.extend(customParseFormat);
    const { RangePicker } = DatePicker;
    const dateFormat = 'YYYY-MM-DD';
    const checkInFormatted = dayjs(row?.checkIn).format(dateFormat);
    const checkOutFormatted = dayjs(row?.checkOut).format(dateFormat);
    return (
        <div className="RoomInfoContain">
            {/*  this is room Detail Tittle */}
            <div style={{ display: 'flex' }}>
                <div className="RoomInfoTypeName">{row?.name}</div>
                <button
                    onClick={() => navigate(-1)}
                    className="RoomInfoBack"
                >
                    BACK
                </button>

            </div>

            {/* this is the rate Star. it had set default at 4.5 */}
            <Rate allowHalf defaultValue={4.5} />
            <Divider />
            {/*  these are the sample avatar things, i had set 7 avatars */}
            <div style={{ display: 'flex', maxWidth: 870 }}>
                <div className="Flex1">
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
                <div className="DetailReview">
                    32 Reviews
                </div>
            </div>
            <br />
            {/* this is Description part */}
            <div className='DetailDes'>
                <div className="lead">{description}</div>
                <br />
                <div onClick={showFullDescriptionHandler} className="FullDes">
                    {showFullDescription ? "Thu gọn" : "Đọc thêm"}
                </div>
            </div>
            <br />
            {/* This is the box showing the benefits of the room */}
            <div className="RoomBeneFit" style={{ backgroundImage: `url(${RoomBenefit})` }} />
            {/*  This is User's Room Detail part */}
            <div>
                {/*   Could book Room if not paid yet and Can see Room currently State if had booked */}
                {
                    (row?.statusId == 1) ?
                        (
                            <div>
                                <div className="RoomInfoTittle">
                                    User's Room Detail
                                </div>
                                <div className="RoomInfoContainer">
                                    <div className="RoomInfoItem">
                                        <div className="Flex1">
                                            CheckIn - CheckOut Date:
                                        </div>
                                        <div className="Flex1">
                                            <RangePicker
                                                className="RangePicker"
                                                defaultValue={(row?.status == 'paid') ? [dayjs(checkInFormatted), dayjs(checkOutFormatted)] : null}
                                                format={dateFormat}
                                            />
                                        </div>
                                    </div>
                                    <div className="RoomInfoItem">
                                        <div className="Flex1">
                                            Room ID
                                        </div>
                                        <div className="Flex1">
                                            <Button icon={<IdcardOutlined />}>
                                                {row.id}
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="RoomInfoItem">
                                        <div className="Flex1">
                                            Room Name:
                                        </div>
                                        <div className="Flex1">
                                            <Button icon={<KeyOutlined />}>
                                                {row?.name}
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="RoomInfoItem">
                                        <div className="Flex1">
                                            Status:
                                        </div>
                                        <div className="Flex1">
                                            {
                                                (row?.statusId == 3) ?
                                                    (
                                                        <Button style={{ backgroundColor: 'yellow' }} icon={<CheckCircleOutlined />}>
                                                            booked
                                                        </Button>
                                                    )
                                                    :
                                                    (
                                                        <Button icon={<CloseSquareOutlined />}>
                                                            {row.statusId}
                                                        </Button>
                                                    )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className="NotPay">
                                <div className="RoomInfoContainer">
                                    <div className="RoomInfoItem">
                                        <div className="Flex1">
                                            <RangePicker
                                                className="Flex12"
                                                defaultValue={(row?.statusId == 3) ? [dayjs(checkInFormatted), dayjs(checkOutFormatted)] : null}
                                                format={dateFormat}
                                            />
                                        </div>
                                        <div className="Flex1">
                                            <Dropdown className="Flex123" menu={menuProps}>
                                                <Button>
                                                    <TagOutlined />  &nbsp;
                                                    <Space>
                                                        {row?.name}
                                                        <CaretDownOutlined />
                                                    </Space>
                                                </Button>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="RoomInfoItem">
                                        <div className="Flex1">
                                            <Dropdown className="Flex12" menu={menuProps1}>
                                                <Button>
                                                    <UserOutlined />  &nbsp;
                                                    <Space>
                                                        Adults - 2
                                                        <CaretDownOutlined />
                                                    </Space>
                                                </Button>
                                            </Dropdown>
                                        </div>
                                        <div className="Flex1">
                                            <Dropdown className="Flex123" menu={menuProps}>
                                                <Button>
                                                    <TagOutlined />  &nbsp;
                                                    <Space>
                                                        {row?.name}
                                                        <CaretDownOutlined />
                                                    </Space>
                                                </Button>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                                <div className="ButtonPos">
                                    <Link to={`/payment/${roomId!}`}>
                                        <Button className="ChooseRoomButon">
                                            Chọn phòng
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        )
                }
            </div>
        </div >
    )
}