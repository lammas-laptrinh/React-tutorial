import { Input, Space } from "antd";

export default function InputField(props: { title: string, placeholder?: string }) {
    return (
        <Space className="input">
            <label className="input-title">{props.title}</label>
            <Input size="large" style={{ height: 80, fontSize:28 }} placeholder={props.placeholder} />
        </Space >
    )
}