import { Button, Col, Row, Space } from "antd";
import Search from "antd/es/input/Search";
import Room from "./room";
import { Rooms } from "../types";
import {
    UnorderedListOutlined,
    AppstoreOutlined,
} from '@ant-design/icons';
import { useState } from "react";
export default function RoomList(props: { roomList: Rooms[], onSearch: (roomId: string) => void }) {
    const { onSearch } = props;
    const [view, setView] = useState<FlexDirection>('row');
    type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
    const styles: React.CSSProperties = {
        textAlign: "left",
        display: "flex",
        fontSize: 20,
        flexDirection: view,
    };
    function handleLineClick() {
        setView("column")
    }
    function handleGridClick() {
        setView("row")
    }
    const handleSearch = (roomId: string) => {
        onSearch(roomId)
    };
    return (
        <Row>
            <Col className='heading' span={12}>
                <h2>Rooms</h2>
                <Search className='search-session' placeholder="tìm kiếm" onChange={(e) => handleSearch(e.target.value)} />
            </Col>
            <Col span={12} className='view'>
                <Space>
                    <Button onClick={handleLineClick} icon={<UnorderedListOutlined />}>
                        Line
                    </Button>
                </Space>
                <Space>
                    <Button onClick={handleGridClick} icon={<AppstoreOutlined />}>
                        Grid
                    </Button>
                </Space>
                <h2 className='view-header' >View: </h2>
            </Col>
            <h2>Standard</h2>
            <Col span={24} style={styles}>
                {props.roomList
                    .filter((room: Rooms) => room.roomType === 'Standard')
                    .map((room: Rooms) => (
                        <Room key={room.id} room={room} roomName={room.roomName} date={room.checkinDate + " - " + room.checkoutDate} />
                    ))
                }
            </Col>
            <h2>Double</h2>
            <Col span={24} style={styles}>
                {props.roomList
                    .filter((room: Rooms) => room.roomType === 'Double')
                    .map((room: Rooms) => (
                        <Room room={room} key={room.id} roomName={room.roomName} date={room.checkinDate + " - " + room.checkoutDate} />
                    ))
                }
            </Col>
            <h2>King</h2>
            <Col span={24} style={styles}>
                {props.roomList
                    .filter((room: Rooms) => room.roomType === 'King')
                    .map((room: Rooms) => (
                        <Room room={room} key={room.id} roomName={room.roomName} date={room.checkinDate + " - " + room.checkoutDate} />
                    ))
                }
            </Col>
        </Row>
    )
}