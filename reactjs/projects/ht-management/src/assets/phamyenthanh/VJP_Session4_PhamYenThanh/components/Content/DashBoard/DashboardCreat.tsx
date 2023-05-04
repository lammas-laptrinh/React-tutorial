import '../../../css/DashboardCreat.css'
import { Table } from 'antd';

import { useState, useEffect } from 'react';
import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { listbookingController } from '@assets/phamyenthanh/VJP_Session4_PhamYenThanh/firebase/controllerfire';

const columns = [
    {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
    },
    {
        title: 'Tên',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Sđt',
        dataIndex: 'phone',
        key: 'phone',
    },
   
    {
        title: 'loại phòng',
        dataIndex: 'roomType',
        key: 'roomType',
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
        dataIndex: 'trangThai',
        key: 'trangThai',
    },
    {
        title: 'Hàng động',
        dataIndex: 'data',
        key: '1',
    },
   

    
   
];

const DashboardCreat = () => {

    const [data, setData] = useState<any[]>([]);
    useEffect(
        () =>
            onSnapshot(listbookingController, (snapshot: QuerySnapshot<DocumentData>) => {
                setData(
                    snapshot.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        };
                    })
                );
            }),
        []
    );
            console.log("data", data)

    return (
        <>
            <div className="DashboardCreat-title">
                <p>Bookking List</p>
            </div>
            <div className='DashboardCreat-list'>
                <Table  dataSource={data} columns={columns} />
            </div>
        </>
    )
}


export default DashboardCreat