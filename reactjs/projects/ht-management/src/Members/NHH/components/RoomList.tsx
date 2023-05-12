import { Button, Col, Row, Space } from "antd";
import Search from "antd/es/input/Search";
import Room from "./room";
import { Rooms } from "../Types";
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
                <h2 className="heading__NameRoom">Rooms</h2>
                <Search className='heading__search' placeholder="tìm kiếm" onChange={(e) => handleSearch(e.target.value)} />
            </Col>
            <Col span={12} className='view'>
            <h2 className='view__header' >View: </h2>
                <Space>
                    <Button style={{marginRight: "10px", display: "flex" ,alignItems : "center", background:"#F5F5F5"}} onClick={handleLineClick} icon={<UnorderedListOutlined />}>
                        Line
                    </Button>
                </Space>
                <Space>
                    <Button style={{marginRight: "10px", display: "flex" ,alignItems : "center",background:"#F5F5F5"}} onClick={handleGridClick} icon={<AppstoreOutlined  />}>
                        Grid
                    </Button>
                </Space>
                
            </Col>
            <h2 className="Type-Room">Standard</h2>
            <Col span={24} style={styles}>
                {props.roomList
                    .filter((room: Rooms) => room.roomType === 'Standard')
                    .map((room: Rooms) => (
                        <Room key={room.id} room={room} roomName={room.roomName} date={room.checkinDate + " - " + room.checkoutDate} />
                    ))
                }
            </Col>
            <h2 className="Type-Room">Double</h2>
            <Col span={24} style={styles}>
                {props.roomList
                    .filter((room: Rooms) => room.roomType === 'Double')
                    .map((room: Rooms) => (
                        <Room room={room} key={room.id} roomName={room.roomName} date={room.checkinDate + " - " + room.checkoutDate} />
                    ))
                }
            </Col>
            <h2 className="Type-Room">King</h2>
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