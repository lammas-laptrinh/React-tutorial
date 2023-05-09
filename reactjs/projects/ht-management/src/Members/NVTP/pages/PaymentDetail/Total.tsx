import { Form } from 'antd';
import { formItems } from './type';

export default function Total() {
    const formItems: formItems[] = [
        { label: 'Subtotal', value: 100 },
        { label: 'Platform Fee', value: 0 },
        { label: 'Total Amount', value: 100 },
    ];

    return (
        <>
            {formItems.map((item, index) => (
                <Form.Item key={index} label={item.label} style={index === 2 ? { borderTop: '1px solid #ccc', textAlign: 'right' } : { textAlign: 'right' }}>
                    {item.value}$
                </Form.Item>
            ))}

        </>
    );
}
