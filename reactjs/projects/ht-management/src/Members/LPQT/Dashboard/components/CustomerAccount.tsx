import { Table } from 'antd';
import '../../CSS/index.css'

export default function CustomerAccount({ rows }: any) {

    const columns = [
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (imageUrl: string) => imageUrl ? <img src={imageUrl} alt="product" style={{ width: 50, height: 50 }} /> : null,
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'SĐT',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Loại Phòng',
            dataIndex: 'roomTypeName',
            key: 'roomTypeName',
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
        <div className='customAccContain'>
            <div className='customAccTittle'>
                BookingList
            </div>
            <div style={{ height: 400, overflow: 'auto' }}>
                <Table dataSource={rows} columns={columns} pagination={false} />
            </div>

        </div>

    );
};

