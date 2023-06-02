import React, { useEffect, useState } from 'react';
import { Row, Image, Col } from 'antd';
import Successs from '../../LPQT/assets/images/success.png';
import { collection, getDocs } from 'firebase/firestore';
import './index.css';
import { firestoreDB } from '../Firebase/firebase';

const InvoiceForm: React.FC = () => {
    const [first, setFirst] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestoreDB, 'bill'));
                const data = querySnapshot.docs.map((doc) => doc.data());
                setFirst(data[0])
                if (data.length > 0) {
                    const billItem = data[0];
                    for (const key in billItem) {
                        console.log(`Field: ${key}, Type: ${typeof billItem[key]}`);
                    }
                }
            } catch (error) {
                console.error('Error retrieving bill data:', error);
            }
        };
        fetchData();
    }, []);
    function formatDate(timestamp: { seconds: number, nanoseconds: number }) {
        const date = new Date(timestamp?.seconds * 1000 + timestamp?.nanoseconds / 1000000);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${day}-${month}-${year}, ${hours}:${minutes}`;
    }
    return (
        <div className='invoiceContain'>
            <div className="invoice-form">
                <React.Fragment key={first?.paymentId}>
                    <Row>
                        <Col className='success-img' span={24}>
                            <Image src={Successs} />
                        </Col>
                    </Row>
                    <Row >
                        <Col className="invoice-header" span={24}>
                            <div className="invoice-header-sub">Payment success</div>
                            <div className="invoice-header-sub-h2">{first?.amount} $</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='flex-center' span={24}>
                            <div className="invoice-line-header"></div>
                        </Col>
                    </Row>
                    <Row className='invoice-title'>
                        <Col span={12}>
                            <div className="invoice-sub">paymentId</div>
                            <div className="invoice-sub">payment Time</div>
                            <div className="invoice-sub">payment Method</div>
                            <div className="invoice-sub last">sender</div>
                        </Col>
                        <Col span={12}>
                            <div className="invoice-sub-right">{first?.paymentId}</div>
                            <div className="invoice-sub-right">{formatDate(first?.paymentTime)}</div>
                            <div className="invoice-sub-right">{`${first?.paymentMethod}`}</div>
                            <div className="invoice-sub-right last">{first?.senderId}</div>
                        </Col>

                    </Row>
                    <Row>
                        <Col className='flex-center' span={24}>
                            <div className="invoice-line-bottom"></div>
                        </Col>
                    </Row>
                    <Row className='invoice-title'>
                        <Col span={12}>
                            <div className="invoice-sub">Amount</div>
                        </Col>
                        <Col span={12}>
                            <div className="invoice-sub-right">{first?.amount} $</div>
                        </Col>
                    </Row>
                </React.Fragment>
            </div>
        </div>
    );
};

export default InvoiceForm;