import { Table } from 'antd';

interface DayRevenueProps {
    rows: any[];
}

export default function DayRevenueBox() {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return (
        <div style={{ backgroundColor: '#eb7d34', height: 250 }}>
            <div style={{ marginBottom: 16, marginLeft: 16, color: 'white', fontWeight: 'bold' }}>
                Doanh thu ngày
            </div>
        </div>

    );
};

