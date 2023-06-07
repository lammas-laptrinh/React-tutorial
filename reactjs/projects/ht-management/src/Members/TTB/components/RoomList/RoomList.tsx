import { Button, Col, Row, Space } from "antd";
import Search from "antd/es/input/Search";
import Room from "./room";
import {
    UnorderedListOutlined,
    AppstoreOutlined,
} from '@ant-design/icons';
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "@src/firebase";
export default function RoomList(props: { roomList: any[], onSearch: (roomId: string) => void }) {
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
/*     console.log("root", props.roomList); */

    const [roomType, setRoomType] = useState<any[]>([]);
    const [roomLists, setRoomList] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestoreDB, 'roomTypes'));

                const data = querySnapshot.docs.map((doc) => doc.data());
                setRoomType(data);
            } catch (error) {
                console.error('Error retrieving bill data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const updatedRoomList = props.roomList?.map(room => {
            const matchedRoomType = roomType?.find(type => type.id === room?.roomTypeId);
            if (matchedRoomType) {
                return {
                    ...room,
                    roomType: matchedRoomType.name
                };
            }
            return room;
        });
        setRoomList(updatedRoomList);
    }, [props.roomList])
/*     console.log("roomList", roomLists); */
    function formatDate(timestamp: { seconds: number, nanoseconds: number }) {
        const date = new Date(timestamp?.seconds * 1000 + timestamp?.nanoseconds / 1000000);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');

        return `${day}/${month}`;
    }
    return (
        <Row className="room-list">
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
            {roomType.map(item => (
                <>
                    <h2>{item.name}</h2>
                    <Col span={24} style={styles}>
                        {roomLists
                            .filter((room: any) => room?.roomType === item.name)
                            .map((room: any) => (
                                <Room key={room.id} room={room} roomName={room?.name} date={room.userCheckIn ? formatDate(room.userCheckIn?.checkIn) + " - " + formatDate(room.userCheckIn?.checkOut) :""} />
                            ))
                        }
                    </Col>
                </>
            ))}


        </Row>
    )
}