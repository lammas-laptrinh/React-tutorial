import { ReactNode, useRef, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import { useForm, Controller } from "react-hook-form";
import { Select, Space } from "antd";
import TextEditor from './textEditors';
import 'react-toastify/dist/ReactToastify.css';
import { Editor } from '@tinymce/tinymce-react';
const { Option } = Select;

export default function Service() {
    const options = [
        { value: "ship", label: "Giao đồ" },
        { value: "repair", label: "Sửa chữa" },
        { value: "complain", label: "Phàn nàn" },
    ];
    const paymentDetailsSchema = Yup.object().shape({
        type: Yup.string().oneOf(
            options.map((option) => option.value),
            'Type is required'
        )
            .required('Please select a service type'),
        // roomNumber: Yup.string()
        //     .required("RoomNumber is required"),
        require: Yup.string()
    });
    // Update the state variable in response to changes to the text editor content

    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
        resolver: yupResolver(paymentDetailsSchema),
    });
    const onSubmitHandler = (data: any) => {
        console.log({ data });
        //this guy is notify message
        toast.success('Đặt dịch vụ thành công', {
            autoClose: 4000,
        });
        reset();
    };
    //return this to UI

    const [content, setContent] = useState('');

    const handleEditorChange = (content: string, editor: any) => {
        setContent(content);
    }
    return (
        <>
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
                                        {/* {options.map((option) => (
                                            <Option value={option.value} key={option.value}>
                                                {option.label}
                                            </Option>
                                        ))} */}
                                    </Select>
                                )}
                            />
                            {errors.roomNumber?.message && <p style={{ color: 'red' }}>{errors.roomNumber.message as ReactNode}</p>}
                        </div>
                    </div>
                   
                    <div>
                        <Editor
                            apiKey="933cfs2ip895ocsuxg76febb5rd939lrkex2ehrs23sl25yy"
                            initialValue={content}
                            init={{
                                height: 500,
                                width: 530,
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


        </>
    );
}