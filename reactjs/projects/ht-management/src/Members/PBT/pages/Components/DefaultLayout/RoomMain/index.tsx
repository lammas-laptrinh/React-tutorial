
import { useState, useEffect } from 'react'
import { Col, MenuProps, Row } from 'antd';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { UnorderedListOutlined, InsertRowBelowOutlined } from '@ant-design/icons';
const { Content } = Layout;
import {

    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Header from '../Header/Header';
import Search from '../Search/Search';
import SiderLayout from '../Sider/SiderLayout';

import './RoomService.css'

import { db } from '../firebase';
import {
    CollectionReference,
    collection,
    onSnapshot,
    query,
} from "firebase/firestore";
import Room from './Room';
import { RoomMain } from './Room/type';
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        icon,
        children,
        label,
    } as MenuItem;
}
const items: MenuItem[] = [
    getItem(<PieChartOutlined style={{ fontSize: 20 }} />),
    getItem(<DesktopOutlined style={{ fontSize: 20 }} />),
    getItem(<UserOutlined style={{ fontSize: 20 }} />, [

    ]),
];

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
function RoomService(props: any) {
    const [database, setDatabase] = useState<RoomMain[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const [Direction, setFlexDirection] = useState<FlexDirection>('row');
    const [searchResult, setSearchResult] = useState<RoomMain[]>([]);

    const { rooms } = props;

    function searchRooms(code: string) {
        const result = database.filter((room) => room.code.toLowerCase().includes(code.toLowerCase()));
        setSearchResult(result);
    }

    const handleSearchValueChange = (value: string) => {
        setSearchValue(value);
        searchRooms(value);
    };
    console.log(searchValue,rooms);
    
    const handleListClick = () => {
        setFlexDirection('column');
    };
    const handleGridClick = () => {
        setFlexDirection('row');
    };

    useEffect(() => {
        const colRef: CollectionReference = collection(db, "King");
        const queries = query(colRef);
        const unsubscribe = onSnapshot(queries, (snapshot) => {
            const respon = snapshot.docs.map((doc) => {
                const req = doc.data();
                return {
                    code: req.Code,
                    people: req.People,
                    request: req.Request,
                    startDate: req.StartDate,
                    endDate: req.EndDate,
                    roomType: req.TypeRoom,
                    countRequest: req.CountRequest,
                };
            });
            setDatabase(respon);
        }, (error) => {
            console.log(error);
        });
        return () => unsubscribe();
    }, []);


    const standardRooms = database.filter((room) => room.roomType === "Standard");
    const doubleRooms = database.filter((room) => room.roomType === "Double");
    const KingRooms = database.filter((room) => room.roomType === "King");

    const standardSearchResult = searchResult.filter(room => room.roomType === 'Standard');
    const doubleSearchResult = searchResult.filter(room => room.roomType === 'Double');
    const kingSearchResult = searchResult.filter(room => room.roomType === 'King');



    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Row  >
                <SiderLayout name='DTD' item={items} />
            </Row>
            <Layout className="site-layout">
                <Header version='Version 1.0.0' name='Phạm Bá Thái' />
                <Content style={{ margin: '0 16px' }}>
                    <Row style={{ marginLeft: 20, marginBottom: 20 }}>
                        <Col span={22} style={{ justifyContent: 'space-between', textAlign: 'left', alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Row>
                                    <h2>Rooms</h2>
                                </Row>
                                <Row style={{ width: 200, height: 40, borderRadius: 100, marginLeft: 20 }}><Search onSearch={handleSearchValueChange} title='Tìm kiếm ....' /></Row>
                            </Row>
                            <Row style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '20px' }}>View:</span>
                                <div className='gird-view' onClick={() => handleGridClick()}>
                                    <InsertRowBelowOutlined className='grid-list-icon' /> <span style={{ fontSize: '20px' }}> Grid</span>
                                </div>
                                <Row className='list-view' onClick={() => handleListClick()}>
                                    <UnorderedListOutlined className='grid-list-icon' /> <span style={{ fontSize: '20px' }}> Line</span>
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                    {searchResult.length > 0 ? (
                        <>
                            <h2>Standard</h2>
                            <Row style={{ display: 'flex', flexDirection: Direction }}>
                                {standardSearchResult.map((room, index) => (
                                        <Link className="link-style" to={`/${room.code}/${room.roomType}`}>
                                        <div key={index}>
                                            <Room people={room.people} roomName={room.code} date={room.startDate} endDate={room.endDate} room={room} />
                                        </div>
                                    </Link>
                                ))}
                            </Row>
                            <h2>Double</h2>
                            <Row style={{ display: 'flex', flexDirection: Direction }}>
                                {doubleSearchResult.map((room, index) => (
                                    <div key={index}>
                                        <Link className="link-style" to={`/${room.code}/${room.roomType}`}>
                                            <Room people={room.people} roomName={room.code} date={room.startDate} endDate={room.endDate} room={room} />
                                        </Link>
                                    </div>

                                ))}
                            </Row>
                            <h2>King</h2>
                            <Row style={{ display: 'flex', flexDirection: Direction }}>
                                {kingSearchResult.map((room, index) => (
                                    <div key={index}>
                                        <Link className="link-style" to={`/${room.code}/${room.roomType}`}>
                                            <Room people={room.people} roomName={room.code} date={room.startDate} endDate={room.endDate} room={room} />
                                        </Link>
                                    </div>
                                ))}
                            </Row>
                        </>
                    ) : (
                        <>
                            <h2>Standard</h2>
                            <Row style={{ display: 'flex', flexDirection: Direction }}>
                                {standardRooms.map((room, index) => (
                                    <div key={index}>
                                        <Link className="link-style" to={`/${room.code}/${room.roomType}`}>
                                        <Room people={room.people} roomName={room.code} date={room.startDate} endDate={room.endDate} room={room} />
                                        </Link>
                                    </div>
                                ))}
                            </Row>
                            <h2>Double</h2>
                            <Row style={{ display: 'flex', flexDirection: Direction }}>
                                {doubleRooms.map((room, index) => (
                                    <div key={index}>
                                        <Link className="link-style" to={`/${room.code}/${room.roomType}`}>
                                        <Room people={room.people} roomName={room.code} date={room.startDate} endDate={room.endDate} room={room} />
                                        </Link>
                                    </div>
                                ))}
                            </Row>
                            <h2>King</h2>
                            <Row style={{ display: 'flex', flexDirection: Direction }}>
                                {KingRooms.map((room, index) => (
                                    <div key={index}>
                                        <Link className="link-style" to={`/${room.code}/${room.roomType}`}>
                                        <Room people={room.people} roomName={room.code} date={room.startDate} endDate={room.endDate} room={room} />
                                        </Link>
                                    </div>
                                ))}
                            </Row>
                        </>
                    )}
                </Content>
            </Layout>
        </Layout>

    )
}

export default RoomService