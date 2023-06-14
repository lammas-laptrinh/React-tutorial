import { Avatar, Col, Layout, Row, theme } from 'antd';
import {
    BellOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';
const Header=(props: { version: string; name: string }) =>{
    const { Header } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <Row style={{ marginLeft: 20 }}>
                <Col span={12} style={{ textAlign: 'left', color: '#7149C6' }}>{props.version}</Col>
                <Col span={12} style={{display:'flex',justifyContent:'flex-end'}}>
                    <BellOutlined style={{ fontSize: 22, margin: 20 }} />
                    <InfoCircleOutlined style={{ fontSize: 22, margin: 20 }} />
                    {props.name}
                    <Avatar style={{ margin: 20 }}></Avatar>
                </Col>
            </Row>
        </Header>
    )
}
export default Header