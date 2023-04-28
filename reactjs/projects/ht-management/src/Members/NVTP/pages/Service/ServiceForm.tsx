import React, { useState } from 'react';
import { Form, Input, Select, Button, Typography } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
const { Title } = Typography;
interface ServiceFormValues {
  type: string;
  roomCount: number;
  content: string;
}

const { Option } = Select;

const ServiceForm: React.FC = () => {
  const [form] = Form.useForm();
  const [editorContent, setEditorContent] = useState('');
  const notifySuccess = () => {
    const type = form.getFieldValue('type');
    const roomCount = form.getFieldValue('roomCount');
    const htmlMessage = `
      <p>Loại dịch vụ: ${type}</p>
      <p>Số phòng: ${roomCount}</p>
      ${editorContent}
    `;

    toast.success(
      <div dangerouslySetInnerHTML={{ __html: htmlMessage }} />,
      {
        autoClose: false,
        closeOnClick: false,
        closeButton: true,
        hideProgressBar: true,
      }
    );
  };
  const validatePositiveNumber = (_: any, value: number) => {
    if (value <= 0) {
      return Promise.reject('Số phòng phải lớn hơn 0');
    }
    return Promise.resolve();
  };
  const handleSubmit = (values: ServiceFormValues) => {
    console.log(values);
    notifySuccess();
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Title level={3}>Đặt Dịch Vụ</Title>
      <Title level={5}>Loại</Title>
      <Form.Item name="type" rules={[{ required: true, message: 'Vui lòng chọn loại dịch vụ' }]}>
        <Select placeholder="Chọn loại dịch vụ">
          <Option value="Dịch Vụ Gọi Đồ Ăn">Dịch Vụ Gọi Đồ Ăn</Option>
          <Option value="Dịch Vụ Gọi Dọn Phòng">Dịch Vụ Gọi Dọn Phòng</Option>
          <Option value="Dịch Vụ Gọi Sửa Chữa">Dịch Vụ Gọi Sửa Chữa</Option>
        </Select>
      </Form.Item>
      <Title level={5}>Số phòng</Title>
      <Form.Item
        name="roomCount"
        rules={[
          { required: true, message: 'Vui lòng nhập số phòng' }
          , { validator: validatePositiveNumber }
        ]}
      >
        <Input type="number" placeholder="Nhập số phòng" />
      </Form.Item>
      <Title level={5}>Nội dung</Title>
      <Form.Item name="content" rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]}>
        <Editor
          apiKey="2iva6gh26oyhux1m2qrw0kyfhqj6ef2ier123op3gxqpskfn"
          value={editorContent}
          onEditorChange={setEditorContent}
          init={{
            height: 300,
            menubar: false,
            plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'],
            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
          }}
        />
      </Form.Item>
      <ToastContainer />
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ background: '#ED712E', marginLeft: '600px', width: '218px', height: '74px' }}>
          Gửi
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ServiceForm;
