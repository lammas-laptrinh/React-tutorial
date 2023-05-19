import React, { useEffect, useState } from 'react';
import './index.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined, SearchOutlined, InfoCircleOutlined, BellOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Input, Col, Typography, Row, Avatar, Button, List, Skeleton, Table } from 'antd';
import { db } from '../../../firebase';
import { collection, getDocs, query } from "firebase/firestore";
import { Booking } from "./type"
const { Header, Content, Sider } = Layout;
const { Title } = Typography;
//Table
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
    {
        title: 'operation',
        dataIndex: 'operation',
        key: 'operation',
    },
];

const TableBooking: React.FC = () => {
    const [data, setData] = useState<Booking[]>([]);

    useEffect(() => {
        const fetchCollection = async () => {
            const q = query(collection(db, "day2"));
            const querySnapshot = await getDocs(q);
            const documents: any = [];
            querySnapshot.forEach((doc) => {
                const newData: any = {
                    ...doc.data()
                }
                documents.push(newData);
            });
            setData(documents);
        };
        fetchCollection();
    }, [db]);

    return (
        <Table dataSource={data} columns={columns} style={{ marginTop: 50 }} />
    );
};

export default TableBooking;