import React, { useEffect, useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Col, MenuProps, Row, Table } from 'antd';
import { Layout, theme } from 'antd';
import Search from 'antd/es/input/Search';
// import { collection, getDocs, query } from "firebase/firestore";
// import { db } from '../../../firebase';
import SideBar from '../../HHP/Components/Sidebars';
import Header from '../../HHP/Components/Headerr';
const { Content } = Layout;

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
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];
const columns = [
    {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'RoomType',
        dataIndex: 'roomType',
        key: 'roomType',
    },
    {
        title: 'CheckIn',
        dataIndex: 'checkIn',
        key: 'checkIn',
    },
    {
        title: 'CheckOut',
        dataIndex: 'checkOut',
        key: 'checkOut',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
];
function formatDate(timestamp: { seconds: number, nanoseconds: number }) {
    const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
const BookingList: React.FC = () => {
    // const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchCollection = async () => {
    //         const q = query(collection(db, "BookingList"));
    //         const querySnapshot = await getDocs(q);
    //         const documents: any = [];
    //         querySnapshot.forEach((doc) => {
    //             const formattedCheckin = formatDate(doc.data().checkIn); // format timestamp
    //             const formattedCheckout = formatDate(doc.data().checkOut);
    //             const newData: any = {
    //                 ...doc.data(),
    //                 checkIn: formattedCheckin, checkOut: formattedCheckout
    //             }

    //             documents.push(newData); // add document data to array
    //         });
    //         setData(documents);
    //     };
    //     fetchCollection();
    // }, [db]);


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SideBar name='DTD' item={items} />
            <Layout className="site-layout">
                <Header version='Version 1.0.0' username='Nguyễn Văn B' />
                <Content style={{ margin: '0 16px' }}>
                    <Row style={{ marginLeft: 20 }}>
                        <Col span={24} style={{ textAlign: 'left', display: 'flex', flexDirection: 'row' }}>
                            <h1>DashBoard</h1>
                            <Search placeholder="input search text" style={{ marginLeft: 20, width: 200, alignItems: 'center', display: 'flex' }} />
                        </Col>
                    </Row>  
                    {/* <Table dataSource={data} columns={columns} style={{ marginTop: 50 }} />; */}
                </Content>
            </Layout>
        </Layout>
    );
};

export default BookingList;