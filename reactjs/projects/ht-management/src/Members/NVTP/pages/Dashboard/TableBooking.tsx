import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Booking } from './type';

const DEFAULT_AVATAR_URL = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';

const columns = [
    {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        render: (avatar: string | undefined) => (
            <img src={avatar} alt="Avatar" style={{ width: '20px', height: '20px' }} />
        ),
    },
    {
        title: 'Tên',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Sđt',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
    },
    {
        title: 'Loại phòng',
        dataIndex: 'roomType',
        key: 'roomTypeId',
    },
    {
        title: 'Check In',
        dataIndex: 'checkIn',
        key: 'checkIn',
    },
    {
        title: 'Check Out',
        dataIndex: 'checkOut',
        key: 'checkOut',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'name',
    },
    {
        title: 'Hành động',
        dataIndex: 'actions',
        key: 'color',
    },
];

const TableBooking: React.FC = () => {
    const [data, setData] = useState<Booking[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersSnapshot = await getDocs(collection(db, 'users'));
                const bookingSnapshot = await getDocs(collection(db, 'booking'));
                const statusSnapshot = await getDocs(collection(db, 'status'));
                const usersData = usersSnapshot.docs.map((doc) => doc.data());
                const bookingData = bookingSnapshot.docs.map((doc) => doc.data());
                const statusData = statusSnapshot.docs.map((doc) => doc.data());

                const mergedData = usersData.map((user) => {
                    const booking = bookingData[0];
                    const status = statusData[0];

                    const checkInDate = new Date(booking?.checkIn?.seconds * 1000);
                    const checkOutDate = new Date(booking?.checkOut?.seconds * 1000);

                    return {
                        avatar: user.avatar || DEFAULT_AVATAR_URL,
                        name: user.name,
                        phoneNumber: user.phoneNumber,
                        roomType: booking?.roomTypeId,
                        checkIn: checkInDate.toLocaleString(),
                        checkOut: checkOutDate.toLocaleString(),
                        status: status?.name,
                        actions: status?.color,
                    };
                });

                setData(mergedData);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return <Table dataSource={data} columns={columns} />;
};

export default TableBooking;
