import { Avatar, Col, Layout, Row, theme } from 'antd';
import {
    BellOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';
export default function Header(props: { version: string; username: string }) {
    const { Header } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <Row style={{ marginLeft: 20 }}>
                <Col span={12} style={{ textAlign: 'left', color: 'blue' }}>{props.version}</Col>
                <Col span={12}>
                    <BellOutlined style={{ fontSize: 22, margin: 20 }} />
                    <InfoCircleOutlined style={{ fontSize: 22, margin: 20 }} />
                    {props.username}
                    <Avatar style={{ margin: 20 }}></Avatar>
                </Col>
            </Row>
        </Header>
    )
}