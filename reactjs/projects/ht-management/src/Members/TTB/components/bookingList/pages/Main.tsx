import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'antd';
import Search from 'antd/es/input/Search';
import { collection, getDocs, query } from "firebase/firestore";
import { firestoreDB } from '@src/firebase';
import '../../../static/index.css'
import '../index.css'
import DashBoardCard from '../components/DashboardCard';
import StatusRender from '../components/StatusRender';
import MoreIcon from '../../../static/images/more.png';

const columns = [
    {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        render: (avatar: string) => avatar ? <img src={avatar} alt="avatar" style={{ width: 50, height: 50 }} /> : null,
        width: '5%',
    },
    {
        title: 'Tên',
        dataIndex: 'username',
        key: 'username',
        width: '15%',
    },
    {
        title: 'Sđt',
        dataIndex: 'phone',
        key: 'phone',
        width: '15%',
    },
    {
        title: 'Loại Phòng',
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
        title: 'Trạng Thái',
        dataIndex: 'status',
        key: 'status',
        render: (status: any) => (
            status?.name ? <StatusRender name={status?.name} color={status?.color} /> : null
        ),
        width: '10%',
    },
    {
        title: 'Hành Động',
        dataIndex: 'task',
        key: 'task',
        render: () => <button><img src={MoreIcon} alt="task" style={{ width: 20, height: 10 }} /></button>,
        width: '5%',
      },
];
function formatDate(timestamp: { seconds: number, nanoseconds: number }) {
    const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
const Dashboard: React.FC = () => {

    const [data, setData] = useState<any[]>([]);
    const [roomType, setRoomType] = useState<any[]>([]);
    const [users, setUsers] = useState<any[]>([]);
    const [status, setStatus] = useState<any[]>([]);

    useEffect(() => {
        const fetchCollection = async () => {
            const q = query(collection(firestoreDB, "booking"));
            const querySnapshot = await getDocs(q);
            const documents: any = [];
            querySnapshot.forEach((doc) => {
                const formattedCheckin = formatDate(doc.data().checkIn); // format timestamp
                const formattedCheckout = formatDate(doc.data().checkOut);
                const newData: any = {
                    ...doc.data(),
                    checkIn: formattedCheckin, checkOut: formattedCheckout
                }

                documents.push(newData); // add document data to array
            });
            setData(documents);
        };
        fetchCollection();
    }, [firestoreDB]);

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
        const fetchUserData = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestoreDB, 'users'));

                const data = querySnapshot.docs.map((doc) => doc.data());
                const userId = querySnapshot.docs.map((doc) => doc.id);
                const mappedData = data.map((data, i) => ({
                    ...data,
                    userId: userId[i]
                }));
                setUsers(mappedData);
            } catch (error) {
                console.error('Error retrieving bill data:', error);
            }
        };
        const fetchStatus = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestoreDB, 'status'));

                const data = querySnapshot.docs.map((doc) => doc.data());
                const statusId = querySnapshot.docs.map((doc) => doc.id);
                const mappedData = data.map((data, i) => ({
                    ...data,
                    statusId: statusId[i]
                }));
                setStatus(mappedData);
            } catch (error) {
                console.error('Error retrieving bill data:', error);
            }
        };
        fetchData();
        fetchUserData();
        fetchStatus();
    }, []);
    /*     console.log("user", users); */

    useEffect(() => {
        const updatedRoomListUser = data?.map(data => {
            const matchedRoomType = roomType?.find(type => type.id === data?.roomTypeId);
            const matchedData = users?.find(user => user?.userId === data?.userId);
            if (matchedData) {
                return {
                    ...data,
                    roomType: matchedRoomType.name,
                    username: matchedData.name,
                    phone: matchedData.phoneNumber,
                    avatar: matchedData.avatar,
                };
            }
            return data;
        });
        /*         console.log(updatedRoomListUser); */

        const updatedRoomStatus = updatedRoomListUser?.map(updatedRoomListUser => {
            const matchedStatus = status?.find(status => status?.statusId == updatedRoomListUser?.statusId);
            console.log(matchedStatus);

            if (matchedStatus) {
                return {
                    ...updatedRoomListUser,
                    status: { name: matchedStatus?.name, color: matchedStatus?.color }
                };
            }
            return updatedRoomListUser;
        });
        setData(updatedRoomStatus);
    }, [users])


    return (
        <div className='dashboardd-container'>
            <Row>
                <Col className='heading' span={12}>
                    <h2>DashBoard</h2>
                    <Search className='search-session' placeholder="tìm kiếm" />
                </Col>
            </Row>
            <Row gutter={30}>
                <Col span={10}>
                    <DashBoardCard backgroundColor='#eb7d34' title='Doanh thu ngày' textColor='white' />
                </Col>
                <Col span={14}>
                    <DashBoardCard backgroundColor='white' title='Tổng quan' textColor='black' />
                </Col>

            </Row>
            <Row className='data-table'>
                <Col span={24}>
                    <h2 className='table-header'>Booking List</h2>
                    <Table dataSource={data} columns={columns} style={{ fontSize: '18px' }} />
                </Col>
            </Row>

        </div>
    );
};

export default Dashboard;