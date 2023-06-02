import React, { useState } from "react";
import { Form, Input, Select, Button, Typography } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { ServicesValues } from "../Service/Types/types";
import './service.scss';

const { Title } = Typography;

const { Option } = Select;

const ServicePage: React.FC = () => {
  const [form] = Form.useForm();

  const [editorContent, setEditorContent] = useState("");

  const notifySuccess = () => {
    const type = form.getFieldValue("type");
    const roomCount = form.getFieldValue("roomCount");
    const htmlMessage = `
      <p>Số phòng: ${roomCount}</p>
      <p>Loại dịch vụ: ${type}</p>
      <p>Tin nhắn: ${editorContent}</p>
    `;
    toast.success(<div dangerouslySetInnerHTML={{ __html: htmlMessage }} />, {
      autoClose: false,
    });
  };
  const handleSubmit = (values: ServicesValues) => {
    console.log(values);
    notifySuccess();
  };
  const buttonStyle = {
    background: "#ED712E",
    marginLeft: "550px",
    width: "150px",
    height: "80px",
  };
  return (
    //
    <Form
      className="Form-Service"
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
    >
      <Title level={3}>Đặt Dịch Vụ</Title>
      <Title level={5}>Loại</Title>
      <Form.Item
        name="type"
        rules={[{ required: true, message: "Chọn loại dịch vụ" }]}
      >
        <Select placeholder="Chọn loại dịch vụ">
          <Option value="1">Dịch Vụ Đồ Ăn</Option>
          <Option value="2">Dịch Vụ Dọn Phòng</Option>
          <Option value="3">Dịch Vụ Sửa Chữa</Option>
          <Option value="4">Yêu cầu khác</Option>
        </Select>
      </Form.Item>
      <Title level={5}>Số phòng</Title>
      <Form.Item
        name="roomCount"
        rules={[{ required: true, message: "Vui lòng nhập số phòng" }]}
      >
        <Input placeholder="R-xxxxx" />
      </Form.Item>
      <Title level={4}>Nội dung</Title>
      <Form.Item
        name="content"
        rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}
      >
        <Editor
          apiKey=""
          value={editorContent}
          onEditorChange={setEditorContent}
          init={{
            plugins: "autolink link image lists",
            toolbar:
              "undo redo | bold italic | alignleft aligncenter alignright",
            branding: false,
            setup: (editor) => {
              editor.ui.registry.addButton("mybutton", {
                text: "My Button",
                onAction: () => {
                  alert("Button clicked!");
                },
              });
            },
          }}
        />
      </Form.Item>
      <ToastContainer />
      <Form.Item>
        <Button type="primary" htmlType="submit" style={buttonStyle}>
          Gửi
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ServicePage;