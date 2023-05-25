import { Input, Space } from "antd";

export default function SignUpInputField(props: { title: string, placeholder?: string, height?: number }) {
    return (
        <Space className="input">
            <label className="input-title">{props.title}</label>
            <Input size="large" style={{ height: props.height ? props.height : 80, fontSize: 16, lineHeight:24 }} placeholder={props.placeholder} />
        </Space >
    )
}