
import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import '../../../css/RequestMain.css'
import { Button, Form, Input, Select, } from 'antd';
import { Option } from 'antd/es/mentions';
import { toast } from 'react-toastify';
const RequestMain = () => {
    const [loai, setloai] = useState("Dịch Vụ Gọi Đồ Ăn")
    const [sophong, setsophong] = useState("")
    const [tiny, settiny] = useState("")
    type SizeType = Parameters<typeof Form>[0]['size'];
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };

    const handleCick = () => {

     let data=({
        loai:loai,
        sophong:sophong,
        tiny:tiny,
     })
     console.log('check data',data)
     toast.success(`${data.loai} ${data.sophong} ${data.tiny}`);
     
    }

   

    return (
        <div className='RequestMain content'>
            <div className='RequestMain-title'>
                <p>Đặt dịch vụ</p>
            </div>
            <div>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    initialValues={{ size: componentSize }}
                    onValuesChange={onFormLayoutChange}
                    size={componentSize as SizeType}
                    style={{ maxWidth: 600 }}
                >
                    <Form.Item label="Số phòng" >
                        <Input value={sophong} onChange={(e) => setsophong(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="loại"  >
                        <Select placeholder="Chọn loại dịch vụ" onChange={(e) =>setloai(e.target.value)}>
                            <Option value="Dịch Vụ Gọi Đồ Ăn">Dịch Vụ Gọi Đồ Ăn</Option>
                            <Option value="Dịch Vụ Gọi Dọn Phòng">Dịch Vụ Gọi Dọn Phòng</Option>
                            <Option value="Dịch Vụ Gọi Sửa Chữa">Dịch Vụ Gọi Sửa Chữa</Option>
                        </Select>
                    </Form.Item>
                    <Editor
                        apiKey='u0lwn2582ddt41g0g7ue842fy64hraboi3jwgchzg2c2znnh'
                        cloudChannel='5-dev'
                        value={tiny}
                        onEditorChange={settiny}
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                    <Form.Item label=" ">
                        <div style={{marginLeft: '290px' ,marginTop:"20px"}}>
                        <Button style={{backgroundColor:"#ED712E" , width:'218px' , height:'74px'}} type="primary" onClick={handleCick} >
                            Gửi
                        </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )

}

export default RequestMain