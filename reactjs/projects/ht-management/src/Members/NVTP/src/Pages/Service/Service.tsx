import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { ServiceFormValues } from './type'
import './Service.css'

const { Option } = Select;
const serviceOptions = [
  { value: 'Dịch Vụ Gọi Đồ Ăn', label: 'Dịch Vụ Gọi Đồ Ăn' },
  { value: 'Dịch Vụ Gọi Dọn Phòng', label: 'Dịch Vụ Gọi Dọn Phòng' },
  { value: 'Dịch Vụ Gọi Sửa Chữa', label: 'Dịch Vụ Gọi Sửa Chữa' },
];
const ServiceForm: React.FC = () => {
  const [form] = Form.useForm();
  const [editorContent, setEditorContent] = useState('');
  const notifySuccess = () => {
    const type = form.getFieldValue('type');
    const roomCount = form.getFieldValue('roomCount');
    const htmlMessage = `
      <p>Loại dịch vụ: ${type}</p>
      <p>Số phòng: ${roomCount}</p>
      <p>Nội dung:${editorContent}</p>
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

  // const handleSubmit = (values: ServiceFormValues) => {
  //   console.log(values);
  //   notifySuccess();
  //   form.resetFields();
  // };
  const handleSubmit = async (values: ServiceFormValues) => {
    try {
      const service = {
        content: editorContent,
      };

      const userServiceData = JSON.parse(localStorage.getItem('userServiceData') || '[]');

      const updatedUserService = [...userServiceData, service];

      localStorage.setItem('userServiceData', JSON.stringify(updatedUserService));

      toast.success('Dịch vụ đã được gửi thành công');

      form.resetFields();
      setEditorContent('');
    } catch (error) {
      console.log('Error:', error);
      toast.error('Đã xảy ra lỗi. Vui lòng thử lại sau.');
    }
  };
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('userServiceData');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit} style={{ background: '#FFFFFF' }}>
      <h5 className='title'>Đặt dịch vụ</h5>
      <label className='desc'>Loại</label>
      <Form.Item name="type" rules={[{ required: true, message: 'Vui lòng chọn loại dịch vụ' }]} >
        <Select placeholder="Sửa chữa">
          {serviceOptions.map(option => (
            <Option key={option.value} value={option.value}>{option.label}</Option>
          ))}
        </Select>
      </Form.Item>
      <label className='desc-room'>Số phòng</label>
      <Form.Item
        name="roomCount"
        rules={[
          { required: true, message: 'Vui lòng nhập số phòng' }
        ]}
        style={{ background: '#FFFFFF' }}
      >
        <Input defaultValue="R-" placeholder="Nhập số phòng" />
      </Form.Item>
      <h5 className='desc-content'>Nội dung</h5>
      <Form.Item name="content" rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]}>
        <Editor
          apiKey="2iva6gh26oyhux1m2qrw0kyfhqj6ef2ier123op3gxqpskfn"
          value={editorContent}
          onEditorChange={setEditorContent}
          init={{
            height: 200,
            menubar: false,
            plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'],
            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
          }}
        />
      </Form.Item>
      <ToastContainer />
      <Form.Item>
        <Button type="primary" htmlType="submit" className="service-form-button">
          Gửi
        </Button>
      </Form.Item>
    </Form >
  );
};

export default ServiceForm;
