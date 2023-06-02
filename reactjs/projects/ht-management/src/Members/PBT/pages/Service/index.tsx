import { useState } from 'react';
import { Form, Select, Input, Typography, Button,notification  } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import './Service.css'
const { Option } = Select;
const { Title } = Typography;


const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const apiKey = "9tm41vs8wkfjky0wjn5g5z8clgb09lri4dszaqzfatbxwu1n";

function GetService(props: { title: string; }) {
  const [content, setContent] = useState('content');


  
  const onSubmit = (values: any) => {
    const { serviceType, roomNumber } = values;
    const contentWithTags = { __html: content }; // Sử dụng dangerouslySetInnerHTML
    notification.success({
      message: 'Thông tin',
      description: (
        <>
          <p><strong>Loại:</strong> {serviceType}</p>
          <p><strong>Số phòng:</strong> {roomNumber}</p>
          <p><strong>Nội dung:</strong></p>
          <div dangerouslySetInnerHTML={contentWithTags}></div>
        </>
      ),
      duration: 3,
    });
  };
  
  return (
    <div className='wrapper-service' >
      <Form
        {...layout}
        name="Service"
        onFinish={onSubmit}
      >
        <Title className='title' level={3}>{props.title}</Title>
        <Form.Item className='sevice-item' style={{ height: '60px' }}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          label="Loại"
          name="serviceType"
          rules={[{ required: true, message: 'Please select a service type!' }]}
        >
          <Select placeholder="Select a service type"
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          >
            <Option value="Sửa chữa">Sửa chữa</Option>
            <Option value="Gọi đồ ăn">Gọi đồ ăn</Option>
            <Option value="Phản ánh dịch vụ">Phản ảnh dịch vụ</Option>
          </Select>
        </Form.Item>

        <Form.Item
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          label="Số phòng"
          name="roomNumber"
          rules={[{ required: true, message: 'Please input your room number!' }]}
        >
          <Input className='inputNumber' defaultValue="R-" placeholder="Input your room number" />
        </Form.Item>

        <Form.Item
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          label="Nội dung"
          name="contentEditer"
          rules={[{ required: true, message: 'Please input your content!' }]}
        >
          <Editor
          value={content || 'content'}
            onEditorChange={(text) => {
              setContent(text);
            }}
            apiKey={apiKey}
            init={{
              placeholder: 'Write your message here...',
              height: 500,
              menubar: true,
              plugins: [

                'advlist autolink lists link image',
                'charmap print preview anchor help',
                'searchreplace visualblocks code',
                'insertdatetime media table paste wordcount',
              ],
              toolbar:
                'undo redo | bold italic underline strikethrough | ' +
                'fontselect fontsizeselect formatselect | ' +
                'alignleft aligncenter alignright alignjustify | ' +
                'outdent indent |  numlist bullist | ' +
                'forecolor backcolor casechange permanentpen formatpainter | emoticons | ' +
                'fullscreen  preview save print | ' +
                'insertfile image media pageembed | ' +
                'a11ycheck ltr rtl | showcomments addcomment',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',

            }}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button className='action-button' type="primary" htmlType="submit">
            Gửi
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default GetService;
