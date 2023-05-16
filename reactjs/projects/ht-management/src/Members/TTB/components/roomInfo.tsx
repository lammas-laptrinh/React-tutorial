
import { RoomProps } from '../types';
import { Button, Col, Rate, Row } from 'antd';
import { Avatar, Divider, Tooltip, DatePicker } from 'antd';
import { AntDesignOutlined, UserOutlined, CaretUpOutlined, KeyOutlined, IdcardOutlined, CheckCircleOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { useState } from "react";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import '../static/index.css';
import RoomBenefit from '../static/images/RoomBenefits.png'


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
    const dateFormat = 'YYYY-MM-DD';

    const checkInFormatted = dayjs(row?.checkinDate).format(dateFormat);
    const checkOutFormatted = dayjs(row?.checkoutDate).format(dateFormat);
    console.log(checkInFormatted);

    return (
        <div className='roomInfoSite' style={{ minHeight: '100vh' }}>
            <div className='roomDetailTitle'>
                <div className="RoomInfoTypeName">{row.roomType}</div>
                <Rate allowHalf defaultValue={4.5} />
            </div>
            <Divider />
            <div>
                <Row>
                    <Col span={12}>
                        <div className="user-review">
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
                    </Col>
                    <Col span={12}>
                        <div className="DetailReview">
                            32 Reviews
                        </div>
                    </Col>
                </Row>

                {/* this is the review.count. It had set default at 32 */}

            </div>
            <br />
            {/* this is Description part */}
            <div className='DetailDes'>
                <div className="lead">orem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                <br />
                <div onClick={showFullDescriptionHandler} className="FullDes">
                    {showFullDescription ? "Thu gọn" : "Đọc thêm"}
                </div>
            </div>
            <br />
            {/* This is the box showing the benefits of the room */}
            <div className="RoomBeneFit" style={{ backgroundImage: `url(${RoomBenefit})` }} />
            {/*  This is User's Room Detail part */}
            {/* <div className="RoomInfoTittle">
                User's Room Detail
            </div> */}
            <div className="RoomInfoContainer">
                <Row>
                    <Col span={12}>
                        <div className="RoomInfoItem">
                            <RangePicker
                                className="RangePicker"
                                defaultValue={(row?.status == 'paid') ? [dayjs('', checkInFormatted), dayjs('', checkOutFormatted)] : null}
                                format={dateFormat}
                            />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="RoomInfoItem">
                            <Button className='room-id' icon={<IdcardOutlined />}>
                                Room -{row.id}
                            </Button>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <div className="RoomInfoItem">
                            <Button className='room-id room-member' icon={<IdcardOutlined />}>
                                Adult-{row.bedAmount}
                            </Button>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="RoomInfoItem">
                            <Button className='room-id' icon={<IdcardOutlined />}>
                                Room - {row.id}
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
            {
                row?.status !== "pay" &&
                (
                    <div className="ButtonPos">
                        <Button className="ChooseRoomButon">
                            Chọn phòng
                        </Button>
                    </div>
                )
            }

        </div >
    )
}