import { useState, useEffect } from 'react'
import { db } from '../firebase';
import {
    CollectionReference,
    collection,
    onSnapshot,
    query,
} from "firebase/firestore";
import { UserOutlined } from '@ant-design/icons';
import { Button, List, Modal } from 'antd';
import { Link } from 'react-router-dom';

interface DataType {
    code: string;
    people: number;
    request: Array<{ [key: string]: any }>;
    startDate: string;
    endDate: string;
}
interface Props {
    searchValue: string;
}



function ListKing(props: Props) {
    const [database, setDatabase] = useState<DataType[]>([]);
    const [visible, setVisible] = useState<boolean>(false);
    const [requestList, setRequestList] = useState<Array<{ [key: string]: any }>>([]);
    const [filteredDatabase, setFilteredDatabase] = useState<DataType[]>([]);

    useEffect(() => {
        const colRef: CollectionReference = collection(db, "King");
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
    useEffect(() => {
        const filteredData = database.filter((item) =>
            item.code.toLowerCase().includes(props.searchValue?.toLowerCase())
        );
        setFilteredDatabase(filteredData);
    }, [database, props.searchValue]);

    const showModal = (item: DataType) => {
        setRequestList(item.request);
        setVisible(true);
    };
    const handleCancel = () => {
        setVisible(false);
    };
    function countRequests(request: Array<{ [key: string]: any }>) {
        return request.length;
    }
    return (
        <div>
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

            <List
                itemLayout="vertical"
                dataSource={filteredDatabase}
                renderItem={(item) => (
                    <List.Item>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                    <Link style={{ color: '#000' }} to={`/item/${item.code}`}>
                                        <span className="list-title" style={{ cursor: 'pointer', marginRight: '16px', fontSize: '20px' }}>
                                            {item.code}
                                        </span>
                                    </Link>
                                    <Button
                                        className="req-button"
                                        onClick={() => showModal(item)}
                                    >
                                        {countRequests(item.request)}
                                    </Button>
                                </div>
                                <div>
                                    {Array.from({ length: item.people }, (_, index) => (
                                        <UserOutlined className='icon-peoples' key={index} />
                                    ))}
                                </div>
                                <span className="list-description" style={{ fontWeight:'500',fontSize: '18px', marginTop: '10px' }}>
                                    {`${item.startDate}-${item.endDate}`}
                                </span>
                            </div>

                        </div>

                    </List.Item>
                )}
            />

        </div >
    )
}

export default ListKing
