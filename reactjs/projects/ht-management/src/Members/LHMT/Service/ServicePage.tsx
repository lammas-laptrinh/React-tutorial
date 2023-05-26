import React, { useState } from "react";
import { Form, Input, Select, Button, Typography } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { ServicesValues } from "./types";

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
    <Form
      className="form"
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
    >
      <Title level={3}>Đặt Dịch Vụ</Title>
      <Title level={5}>Loại</Title>
      <Form.Item
        name="type"
        rules={[{ required: true, message: "Vui lòng chọn loại dịch vụ" }]}
      >
        <Select placeholder="Chọn loại dịch vụ">
          <Option value="Dịch Vụ Gọi Đồ Ăn">Dịch Vụ Gọi Đồ Ăn</Option>
          <Option value="Dịch Vụ Gọi Dọn Phòng">Dịch Vụ Gọi Dọn Phòng</Option>
          <Option value="Dịch Vụ Gọi Sửa Chữa">Dịch Vụ Gọi Sửa Chữa</Option>
          <Option value="Yêu cầu khác">Yêu cầu khác</Option>
        </Select>
      </Form.Item>
      <Title level={5}>Số phòng</Title>
      <Form.Item
        name="roomCount"
        rules={[{ required: true, message: "Vui lòng nhập số phòng" }]}
      >
        <Input placeholder="R-" />
      </Form.Item>
      <Title level={4}>Nội dung</Title>
      <Form.Item
        name="content"
        rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}
      >
        <Editor
          apiKey="w7q3s6xa75tbkc6z17hxljh9g5jlyh01xi6zvzaqfblb0h31"
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
