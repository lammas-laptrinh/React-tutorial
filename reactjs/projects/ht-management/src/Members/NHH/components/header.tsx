import { Avatar, Col, Layout, Row } from 'antd';
import {
    BellOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';
import '../CSS/index.scss'

export default function Header(props: { version: string; username: string }) {
    const { Header } = Layout;
    return (
        <Header className='header' style={{ background: "#f5f5f5",marginTop :"20px" }}>
            <Row style={{ display:'flex', justifyContent: 'space-between', alignItems : 'baseline' }}>
                <Col  className='version'>{props.version}</Col>
                <Col  className='InfoUser' style={{display: "flex" ,alignItems :"baseline"}}>
                    <BellOutlined className='InfoUser__icon'  />
                    <InfoCircleOutlined className='InfoUser__icon'/>
                    <div className="InfoUser__Name">{props.username}</div>
                    <Avatar className='InfoUser__Ava'></Avatar>
                </Col>
            </Row>
        </Header>
    )
}