import { Input, Space } from "antd";

export default function SignUpInputField(props: { title: string, placeholder?: string, height?: number, value?: any, onChange?: any, name?: any }) {
    return (
        <Space className="input">
            <label className="input-title-signup">{props.title}</label>
            <Input name={props.name} onChange={props.onChange} size="large" style={{ height: props.height ? props.height : 80, fontSize: 16, lineHeight: 24 }} placeholder={props.placeholder} />
        </Space >
    )
}