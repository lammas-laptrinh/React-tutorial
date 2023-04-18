import { Table } from 'antd';

interface DayRevenueProps {
    rows: any[];
}

export default function OverViewBox() {
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
        <div style={{ color: 'black', height: 250, backgroundColor: 'white' }}>
            <div style={{ fontWeight: 'bold', marginLeft: 16 }}>
                Tổng quan
            </div>

        </div>
    );
};

