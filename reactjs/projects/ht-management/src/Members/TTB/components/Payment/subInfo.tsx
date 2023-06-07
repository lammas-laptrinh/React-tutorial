import { Col, Row } from "antd";

export default function SubInfo(props: { leftLabel: string, rightLabel: string, boldRight?: boolean, boldLeft?: boolean }) {
    return (
        <Row>
            <Col span={12} style={{ paddingRight: 20 }}>
                <label className={`input-title left-title ${props.boldLeft ? 'bold' : ''}`}>{props.leftLabel}</label>
            </Col>
            <Col span={12}>
                <label className={`input-title right-title ${props.boldRight ? 'bold' : ''}`}>{props.rightLabel}</label>
            </Col>
        </Row>
    )
}