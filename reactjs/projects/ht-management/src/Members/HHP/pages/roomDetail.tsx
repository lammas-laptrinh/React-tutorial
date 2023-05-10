import { Col, Layout, MenuProps, Row } from "antd";
import { useParams } from "react-router-dom";
import SideBar from "../Components/Sidebars";
import Header from "../Components/Headerr";
import { Content } from "antd/es/layout/layout";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Rooms } from "../types";

export default function Detail() {
    const { id } = useParams();
    type MenuItem = Required<MenuProps>['items'][number];

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
        } as MenuItem;
    }
    const items: MenuItem[] = [
        getItem('Option 1', '1', <PieChartOutlined /* style={{fontSize:30}} */ />),
        getItem('Option 2', '2', <DesktopOutlined /* style={{fontSize:30}} */ />),
        getItem('User', 'sub1', <UserOutlined /* style={{fontSize:30}} */ />, [
            getItem('Tom', '3'),
            getItem('Bill', '4'),
            getItem('Alex', '5'),
        ]),
        getItem('Team', 'sub2', <TeamOutlined /* style={{fontSize:30}} */ />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Files', '9', <FileOutlined /* style={{fontSize:30}} */ />),
    ];
    const rooms: Rooms[] = [
        {
            id: "1",
            roomName: 'Room 1',
            bedAmount: 3,
            checkinDate: '11/12',
            checkoutDate: '16/12',
            roomType: 'Standard',
            serviceCount: 2,
            service: ['service 1', 'service 2']
        },
        {
            id: "2",
            roomName: 'Room 2',
            bedAmount: 3,
            checkinDate: '18/12',
            checkoutDate: '20/12',
            roomType: 'Double',
            serviceCount: 0,
        },
        {
            id: "3",
            roomName: 'Room 3',
            bedAmount: 3,
            checkinDate: '18/12',
            checkoutDate: '20/12',
            roomType: 'King',
            serviceCount: 0,
        },
        {
            id: "4",
            roomName: 'Room 4',
            bedAmount: 3,
            checkinDate: '12/12',
            checkoutDate: '16/12',
            roomType: 'Standard',
            serviceCount: 0,
        },
        {
            id: "5",
            roomName: 'Room 5',
            bedAmount: 3,
            checkinDate: '12/12',
            checkoutDate: '16/12',
            roomType: 'King',
            serviceCount: 3,
            service: ['service 1', 'service 2', 'service 3']
        },
    ]
    const getRoom = rooms.find(room => room.id === id);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SideBar name='DTD' item={items} />
            <Layout className="site-layout">
                <Header version='Version 1.0.0' username='Nguyễn Văn B' />
                <Content style={{ margin: '0 16px' }}>
                    <Row style={{ marginLeft: 20 }}>
                        <Col span={24} style={{ textAlign: 'left', display: 'flex', flexDirection: 'row', fontSize: 20 }}>
                            <h2>Rooms Detail</h2>
                        </Col>
                        <Col span={24} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', fontSize: 20 }}>
                            <h3>Rooms Detail</h3>
                            <p>ID: {getRoom?.id}</p>
                            <p>Room Name: {getRoom?.roomName} </p>
                            <p>Bed Amount: {getRoom?.bedAmount}</p>
                            <p>Checkin Day: {getRoom?.checkinDate}</p>
                            <p>Checkout Day: {getRoom?.checkoutDate}</p>
                            <p>Room Type: {getRoom?.roomType}</p>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Layout>
    )
}