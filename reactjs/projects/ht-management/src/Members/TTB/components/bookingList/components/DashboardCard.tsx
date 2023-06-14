import { Col, Typography } from "antd";

export default function DashBoardCard(props: { title: string, colValue?: number, backgroundColor: string, textColor: string }) {
    return (
        <Col span={props.colValue} style={{ backgroundColor: props.backgroundColor, minHeight: 300, borderRadius: 12, paddingRight: 20 }}>
            <Typography style={{ color: props.textColor, fontSize: 24, fontWeight: 'bold' }}>
                {props.title}
            </Typography>
        </Col>
    )
}