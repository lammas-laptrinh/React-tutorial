import { ReactNode, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import { useForm, Controller } from "react-hook-form";
import { Select } from "antd";
import { Editor } from '@tinymce/tinymce-react'
import 'react-toastify/dist/ReactToastify.css';
import { options, roomData } from '../../Constant/Global';
import '../../../LPQT/CSS/index.css'


const { Option } = Select;

export default function ServicePage() {
    //yup Handler
    const paymentDetailsSchema = Yup.object().shape({
        type: Yup.string().oneOf(
            options.map((option) => option.value),
            'Type is required'
        )
            .required('Please select a service type'),
        roomNumber: Yup.string()
            .required("RoomNumber is required"),
        require: Yup.string()
    });

    const { register, handleSubmit, formState: { errors }, reset, control, setValue } = useForm({
        resolver: yupResolver(paymentDetailsSchema),
        defaultValues: { roomNumber: '', require: '', type: null },
    });

    //Submit Handler
    const onSubmitHandler = (data: any) => {
        console.log(data)
        const htmlMessage = `
        <p>Loại dịch vụ: ${data.type}</p>
        <p>Mã phòng: ${data.roomNumber}</p>
        <div style="display: flex">
        <p>Yêu cầu :  ${data.require}</p>
        </div>
      `;
        toast.success(
            <div dangerouslySetInnerHTML={{ __html: htmlMessage }} />,
            {
                autoClose: 8000,
                closeOnClick: false,
                closeButton: true,
                hideProgressBar: true,
            }
        );
        reset();
    };
    //these guys to get the Options data of roomNumber 
    const roomTypes = [...new Set(roomData.map((room) => room.roomType?.roomTypeName))];
    const roomOptionsList = roomTypes.map((roomOption) => {
        const roomsWithType = roomData.filter((room) => room.roomType?.roomTypeName === roomOption);
        return {
            label: roomOption,
            options: roomsWithType.map((option) => {
                return {
                    label: option.name,
                    value: option.id,
                };
            }),
        };
    });
    //this is for Editor get Data by onchange, in short, this is require data
    const [require, setRequire] = useState("");
    const handleRequireChange = (content: any) => {
        setRequire(content);
    };
    require && setValue("require", require);
    return (
        <>
            <ToastContainer />
            <form className='form-container' onSubmit={handleSubmit(onSubmitHandler)} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

            }}>
                <div className='ServiceMainContain'>
                    <div className='BookServiceTittle'>Đặt dịch vụ</div>
                    <div className='RoomNumberContain' >
                        <div className='BookServiceItemTitle'>
                            Loại
                        </div>
                        <div >
                            <Controller
                                name="type"
                                control={control}
                                defaultValue={null}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        className='Width515'
                                        size='large'
                                        id='type'
                                        listHeight={128}
                                        showSearch
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
                            {errors.type?.message && <p className='red'>{errors.type.message as ReactNode}</p>}
                        </div>
                    </div>
                    <div className='RoomNumberContain' >
                        <div className='BookServiceItemTitle'>
                            Số phòng
                        </div>
                        <div >
                            <Controller
                                name="roomNumber"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Select
                                        className='Width515'
                                        size='large'
                                        {...field}
                                        options={roomOptionsList}
                                    />
                                )}
                            />
                            {errors.roomNumber?.message && <p className='red'>{errors.roomNumber.message as ReactNode}</p>}
                        </div>
                    </div>
                    <div className='RequireContain' >
                        <div style={{ flexDirection: 'column', }}>
                            <div className='BookServiceItemTitleBold'>
                                Nội dung
                            </div>
                            <div className='Width515'>
                                <Editor
                                    {...register("require")}
                                    apiKey="lkuoi9n1y2sg0zh3aw7p6ngzjlpntdg53nko0h4odj93yapq"
                                    init={{
                                        height: 500,
                                        menubar: true,
                                        toolbar:
                                            "undo redo | formatselect | bold italic backcolor | \
                                                alignleft aligncenter alignright alignjustify | \
                                                bullist numlist outdent indent | removeformat | help",
                                    }}
                                    onEditorChange={handleRequireChange}
                                    value={require}
                                />
                            </div>
                        </div>
                    </div>
                    <button className='SubmmitButtonContain'>
                        Gửi
                    </button>

                </div>
            </form >
        </>
    );
}
