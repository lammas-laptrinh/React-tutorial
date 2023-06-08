import React from 'react';
import { Row, Image, Col, Button } from 'antd';
import '../css/index.css';
import Faile from '../../../LPQT/assets/images/faile.jpg';
import { PoweroffOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function InvoiceFaileForm() {
    return (
        <div className='invoiceContain'>
            <div className="invoice-form-faile">
                <div className='backButtonUser'>
                    <Link to={'/'}>
                        <Button
                            size='large'
                            type="primary" danger
                            icon={<PoweroffOutlined />}
                        >
                            Back!
                        </Button>
                    </Link>
                </div>
                <React.Fragment >
                    <Row>
                        <Col className='success-img' span={24}>
                            <Image className='faileImg' src={Faile} />
                        </Col>
                    </Row>
                    <Row >
                        <Col className="invoice-header" span={24}>
                            <div className="invoice-header-sub">PAYMENT FAILED</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='flex-center' span={24}>
                            <div className="invoice-line-header"></div>
                        </Col>
                    </Row>
                    <div className='invoice-header'>
                        <div className='invoice-header-sub'>
                            Thanh toán không thành công.
                        </div>
                    </div>
                </React.Fragment>
            </div>
        </div>
    );
}
