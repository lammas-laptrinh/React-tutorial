import { Table } from 'antd';

export default function CustomerAccount() {

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
            title: 'SĐT',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Loại Phòng',
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
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            key: 'action',
        },

    ];

    return (
        <div style={{ backgroundColor: '#ede2e1', height: 250 }}>
            <div style={{ marginBottom: 16, color: 'black', fontWeight: 'bold' }}>
                BookingList
            </div>
            <div >
                <Table columns={columns} pagination={false} />
            </div>

        </div>

    );
};

