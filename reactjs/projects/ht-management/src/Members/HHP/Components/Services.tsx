import { ReactNode, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import { useForm, Controller } from "react-hook-form";
import { Select, Space } from "antd";
import 'react-toastify/dist/ReactToastify.css';
import { Editor } from '@tinymce/tinymce-react';
import { rooms } from '../Commons';

const { Option } = Select;

export default function Service() {
    const options = [
        { value: "Ship", label: "Dịch vụ giao đồ" },
        { value: "Repair", label: "Dịch vụ sửa chữa" },
        { value: "Complain", label: "Khách hàng phàn nàn" },
    ];
    const paymentDetailsSchema = Yup.object().shape({
        type: Yup.string().oneOf(
            options.map((option) => option.value),
            'Type is required'
        ).required('Please select a service type'),
        require: Yup.string()
    });

    const { handleSubmit, formState: { errors }, reset, control } = useForm({
        resolver: yupResolver(paymentDetailsSchema),
    });
    const onSubmitHandler = (data: any) => {
        console.log({ data });
        toast.success(<div>Đặt dịch vụ thành công!<br />Thông tin dịch vụ: <br />Loại: {data.type}, Số phòng: {data.number}, Yêu cầu khác: {content}</div>, {
            autoClose: 4000,
        });
        reset();
    };
    const [content, setContent] = useState('');

    const handleEditorChange = (editor: any) => {
        setContent(editor.getContent({ format: 'text' }));
    }
    //return this to UI
    return (
        <Space>
            <ToastContainer />
            <Space className='service-form-container' >
                <form className='form-container' onSubmit={handleSubmit(onSubmitHandler)} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <h2>Đặt dịch vụ</h2>
                    <div className='form-item' style={{ marginBottom: '20px', textAlign: 'left', }}>
                        <div className='item-title'>
                            <label >Loại</label>
                        </div>
                        <div className='item-input'>
                            <Controller
                                name="type"
                                control={control}
                                defaultValue={null}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        style={{ width: '525px' }}
                                        id='type'
                                        showSearch
                                        size='large'
                                        placeholder="Select a type of service"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                    >
                                        {options.map((option) => (
                                            <Option value={option.value} key={option.value}>
                                                {option.label}
                                            </Option>
                                        ))}
                                    </Select>
                                )}
                            />
                            {errors.type?.message && <p style={{ color: 'red' }}>{errors.type.message as ReactNode}</p>}
                        </div>
                    </div>
                    <div className='form-item' style={{ marginBottom: '20px', textAlign: 'left' }}>
                        <div className='item-title'>
                            <label >Số phòng</label>
                        </div>
                        <div className='item-input'>
                            <Controller
                                name="number"
                                control={control}
                                defaultValue={null}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        style={{ width: '525px' }}
                                        id='type'
                                        showSearch
                                        size='large'
                                        placeholder="Select a room number"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                    >
                                        {rooms.map((option) => (
                                            <Option value={option.id} key={option.id}>
                                                {option.roomName}
                                            </Option>
                                        ))}
                                    </Select>
                                )}
                            />
                            {errors.roomNumber?.message && <p style={{ color: 'red' }}>{errors.roomNumber.message as ReactNode}</p>}
                        </div>
                    </div>
                    <div>
                        <Editor
                            apiKey="933cfs2ip895ocsuxg76febb5rd939lrkex2ehrs23sl25yy"
                            init={{
                                height: 500,
                                width: 530,
                                menubar: true,
                                plugins: 'autolink link image lists',
                                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright',
                                branding: false,
                                setup: (editor) => {
                                    // Add a custom button to the toolbar
                                    editor.ui.registry.addButton('mybutton', {
                                        text: 'My Button',
                                        onAction: () => {
                                            alert('Button clicked!');
                                        },
                                    });
                                },
                            }}
                            onEditorChange={handleEditorChange}
                        />
                    </div>
                    <div className='form-item' style={{ marginBottom: '20px', marginTop: '40px' }}>
                        <button style={{ backgroundColor: '#164aff', color: 'white', width: '120px', height: '40px' }}>
                            Gửi
                        </button>
                    </div>
                </form>
            </Space>


        </Space>
    );
}