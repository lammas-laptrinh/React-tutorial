import { useState } from 'react';
import { Form, Select, Typography, Button, notification } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import './Service.css'
const { Option } = Select;
import { ArrowLeftOutlined } from '@ant-design/icons';
const { Title } = Typography;
import {
    collection,
    addDoc, Timestamp

} from "firebase/firestore";
import { db } from '../firebase';

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


    const roomNumberToNameMap: { [key: string]: string } = {
        "1rDEXoPwsyNI3nHgWm1x": "Luxury",
        "bKZchXEbZEIy6fUNIKnj": "Lanai",
        "x45zui1qi7Wk0yb2oZmF": "Single",
    };

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const DateTimeNow = Timestamp.fromDate(new Date(formattedDate));

    const handleGoBack = () => {
        window.history.back();
    };
    const onSubmit = async (values: any) => {
        const { serviceType, roomNumber } = values;
        const roomName = roomNumberToNameMap[roomNumber];
        const contentWithTags = { __html: content };
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(contentWithTags.__html, 'text/html');
        const innerText = htmlDoc.body.innerText;


        const usersCheckInCollection = collection(db, "rooms", roomNumber, "userRequest");
        try {
            const docRef = await addDoc(usersCheckInCollection, {
                title: serviceType,
                createAt: DateTimeNow,
                content: innerText,
                // Add other booking data properties as needed
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }


        // const roomRef = doc(db, 'rooms', '1rDEXoPwsyNI3nHgWm1x');
        // const collection2Ref = collection(roomRef, 'usersCheckIn');
        // const collection2Snapshot = await getDocs(collection2Ref);
        // const usersCheckInDocs = collection2Snapshot.docs;

        // // Xác định tài liệu (doc) cần xóa
        // const docId = usersCheckInDocs[1].id;


        // // Xóa tài liệu khỏi Firestore
        // try {
        //   await deleteDoc(doc(db, 'rooms', '1rDEXoPwsyNI3nHgWm1x', 'usersCheckIn', docId));
        //   console.log('Document deleted successfully');
        // } catch (error) {
        //   console.error('Error deleting document: ', error);
        // }


        notification.success({
            message: 'Thông tin',
            description: (
                <>
                    <p><strong>Loại:</strong> {serviceType}</p>
                    <p><strong>Số phòng:</strong> {roomName}</p>
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
                <div className='wrappr-back-title'>
                    <ArrowLeftOutlined />
                    <span onClick={handleGoBack} className='span-back'> Quay lại</span>
                </div>
                <div className='wrapper-title'>
                    <Title className='title' level={3}>{props.title}</Title>
                </div>
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

                <Form.Item className='sevice-item' style={{ height: '60px' }}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    label="Chọn phòng"
                    name="roomNumber"
                    rules={[{ required: true, message: 'Please select a room number!' }]}
                >
                    <Select placeholder="Select a room number"
                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}>
                        <Option value="x45zui1qi7Wk0yb2oZmF">Single</Option>
                        <Option value="1rDEXoPwsyNI3nHgWm1x">Luxury</Option>
                        <Option value="bKZchXEbZEIy6fUNIKnj">Lanai</Option>
                    </Select>
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
                        onEditorChange={(text: any) => {
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

                <Form.Item className='action-wrapper-service' {...tailLayout}>
                    <Button className='action-button-service' type="primary" htmlType="submit">
                        Gửi
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default GetService;