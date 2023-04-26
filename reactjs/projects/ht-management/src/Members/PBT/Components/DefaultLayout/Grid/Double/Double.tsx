import { useState, useEffect } from 'react'
import { db } from '../firebase';
import {
    CollectionReference,
    collection,
    onSnapshot,
    query,
} from "firebase/firestore";
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Card, List, Modal } from 'antd';
import './Double.css'
interface Props {
    searchValue: string;
}
interface DataType {
    code: string;
    people: number;
    request: Array<{ [key: string]: any }>;
    startDate: string;
    endDate: string;
}


function Double(props: Props) {
    const [database, setDatabase] = useState<DataType[]>([]);
    const [visible, setVisible] = useState<boolean>(false);
    const [requestList, setRequestList] = useState<Array<{ [key: string]: any }>>([]);

    useEffect(() => {
        const colRef: CollectionReference = collection(db, "Double");
        const queries = query(colRef);
        const unsubscribe = onSnapshot(queries, (snapshot) => {
            const respon = snapshot.docs.map((doc) => {
                const req = doc.data();
                return {
                    code: req.Code,
                    people: req.People,
                    request: req.Request,
                    startDate: req.StartDate,
                    endDate: req.EndDate,
                };
            });
            setDatabase(respon);
        }, (error) => {
            console.log(error);
        });
        return () => unsubscribe();
    }, []);
    const showModal = (item: DataType) => {
        setRequestList(item.request);
        setVisible(true);
    };


    const handleCancel = () => {
        setVisible(false);
    };


    const data = database
        .filter((item) =>
            item.code.toLowerCase().includes(props.searchValue?.toLowerCase() || '')
        )
        .map((item: DataType) => {
            return {
                code: item.code,
                people: item.people,
                request: item.request,
                startDate: item.startDate,
                endDate: item.endDate,
            };
        });

    function countRequests(request: Array<{ [key: string]: any }>) {
        return request.length;
    }
    return (
        <div>  <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
            }}
            dataSource={data}
            renderItem={(item) => (
                <List.Item className='item'>
                <Card className='card' title={item.code} >
                    {Array.from({ length: item.people }, (_, index) => (
                        <UserOutlined style={{ fontSize: '18px' ,marginLeft:'5px'}} key={index} />
                    ))}
                    <div className='content'>
                        <p style={{ fontSize: '18px',fontWeight:'500' }}>{item.startDate} - {item.endDate}</p>
                        <Link to={`/item/${item.code}`}>
                        <p>Detail</p>
                        </Link>
                    </div>
                    <button 
                    className='action-button'
                        onClick={() => showModal(item)}>
                        {countRequests(item.request)}
                    </button>
                </Card>
        </List.Item>
            )}
        />
            <Modal
                title="Yêu cầu"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
            >
                <List
                    dataSource={requestList}
                    renderItem={(item) => (
                        <List.Item>
                            {item.replace(/"/g, '')}
                        </List.Item>
                    )}
                />
            </Modal>

        </div >
    )
}

export default Double