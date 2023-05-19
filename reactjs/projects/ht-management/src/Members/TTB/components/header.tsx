import { Avatar, Col, Layout, Row, theme } from 'antd';
import {
    BellOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';
import '../static/index.css'

export default function Header(props: { version: string; username: string }) {
    const { Header } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Header className='header' style={{ background: colorBgContainer }}>
            <Row style={{ marginLeft: 20 }}>
                <Col span={12} className='version'>{props.version}</Col>
                <Col span={12} className='userSession'>
                    <BellOutlined className='headerIcon'  />
                    <InfoCircleOutlined className='headerIcon'/>
                    {props.username}
                    <Avatar className='avt'></Avatar>
                </Col>
            </Row>
        </Header>
    )
}