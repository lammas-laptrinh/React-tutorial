import { ReactNode } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import { useForm, Controller } from "react-hook-form";
import { Select } from "antd";
import TextEditor from '../components/textEditor';
import 'react-toastify/dist/ReactToastify.css';

const { Option } = Select;

export default function Main() {
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
        roomNumber: Yup.string()
            .required("RoomNumber is required"),
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
    return (
        <>
        <ToastContainer />
        <form className='form-container' onSubmit={handleSubmit(onSubmitHandler)} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

        }}>
            <h2>Đặt dịch vụ</h2>
            <div className='form-item' style={{ marginBottom: '20px', textAlign: 'left', }}>
                <div className='item-tittle'>
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
                <div className='item-tittle'>
                    <label >Số phòng</label>
                </div>
                <div className='item-input'>
                    <input
                        {...register("roomNumber")}
                        name='roomNumber'
                        id='roomNumber'
                        placeholder='R-'
                        style={{ height: '30px', width: '515px' }}
                    />
                    {errors.roomNumber?.message && <p style={{ color: 'red' }}>{errors.roomNumber.message as ReactNode}</p>}
                </div>
            </div>
            <div className='form-item' style={{ marginBottom: '20px', textAlign: 'left', display: 'flex', flexDirection: 'row' }}>
                <div style={{ flexDirection: 'column', }}>
                    <div className='item-tittle'>
                        <label >Nội dung</label>
                    </div>
                    <div className='item-input'>
                        <Controller
                            name="require"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            render={({ field }) => (
                                <TextEditor  placeholder={'your detail require is typed here'} {...field} />
                            )}
                        />
                    </div>
                </div>
            </div>
            <div className='form-item' style={{ marginBottom: '20px', marginTop: '40px' }}>
                <button style={{ backgroundColor: '#164aff', color: 'white', width: '120px', height: '40px' }}>
                    Gửi
                </button>
            </div>
        </form>
        </>  
    );
}
