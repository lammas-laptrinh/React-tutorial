import { Avatar, Col, Rate, Row, Tooltip } from "antd";
import { useParams } from "react-router-dom";
import {  DesRoom } from "../../Types";
import { Image } from 'antd';
import './roomDetail.scss';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import DatePickers from "./DatePickers";
export default function Detail() {
    const { id } = useParams();
    const rooms: DesRoom[] = [
        {
            id: "1",   
            checkinDate: '11/12',
            checkoutDate: '16/12',
            roomType: 'Standard',     
            des: 'orem Ipsum has been the industrys standard dummy text ever since the 1500s,',
             review : '39 review',
        },
        {
            id: "2",
            review : '39 review',
            checkinDate: '12/12',
            checkoutDate: '16/12',
            roomType: 'Standard',
            des: 'orem Ipsum has been the industrys standard dummy text ever since the 1500s,',      
        },
        {
            id: "3",
            checkinDate: '12/12',
            checkoutDate: '16/12',
            roomType: 'Standard',
            des: 'orem Ipsum has been the industrys standard dummy text ever since the 1500s,',
            review : '39 review',
        },
        {
            id: "4", 
            checkinDate: '12/12',
            checkoutDate: '16/12',
            roomType: 'Standard',
            des: 'orem Ipsum has been the industrys standard dummy text ever since the 1500s,',
            review : '39 review',
        },
        {
            id: "5",
            checkinDate: '12/12',
            checkoutDate: '16/12',
            roomType: 'Standard',
            des: 'orem Ipsum has been the industrys standard dummy text ever since the 1500s,',
            review : '39 review',
        },



        {
            id: "6",
            checkinDate: '18/12',
            checkoutDate: '20/12',
            roomType: 'Double',
            des: 'orem Ipsum has been the industrys standard dummy text ever since the 1500s,',
            review : '39 review',
        },
        {
            id: "7",
            checkinDate: '18/12',
            checkoutDate: '20/12',
            roomType: 'Double',
            des: 'orem Ipsum has been the industrys standard dummy text ever since the 1500s,',
            review : '39 review',
        },
        {
            id: "8",
           
            review : '39 review',
            checkinDate: '18/12',
            checkoutDate: '20/12',
            roomType: 'Double',
            des: 'orem Ipsum has been the industrys standard dummy text ever since the 1500s,',
            
        },
        {
            id: "9",
            
            review : '39 review',
            checkinDate: '18/12',
            checkoutDate: '20/12',
            roomType: 'Double',
            des: 'orem Ipsum has been the industrys standard dummy text ever since the 1500s,',
            
        },
        {
            id: "10",
            
            review : '39 review',
            checkinDate: '18/12',
            checkoutDate: '20/12',
            roomType: 'Double',
            des: 'orem Ipsum has been the industrys standard dummy text ever since the 1500s,',
            
        },
        {
            id: "11",
            
            review : '39 review',
            checkinDate: '18/12',
            checkoutDate: '20/12',
            roomType: 'King',
            des: 'orem Ipsum has been the industrys standard dummy text ever since the 1500s,',
            
        },

        {
            id: "12",
            
            review : '39 review',
            checkinDate: '12/12',
            checkoutDate: '16/12',
            roomType: 'King',
           
            des: 'orem Ipsum has been the industrys standard dummy text ever since the 1500s,',
            
        },
        {
            id: "13",
           
            review : '39 review',
            checkinDate: '12/12',
            checkoutDate: '16/12',
            roomType: 'King',
           
            des: 'orem Ipsum has been the industrys standard dummy text ever since the 1500s,',
            
        },
        {
            id: "14",
            
            review : '39 review',
            checkinDate: '12/12',
            checkoutDate: '16/12',
            roomType: 'King',
           
            des: 'orem Ipsum has been the industrys standard dummy text ever since the 1500s,',
            
        },
        {
            id: "15",
            
            review : '39 review',
            checkinDate: '12/12',
            checkoutDate: '16/12',
            roomType: 'King',
           
            des: 'orem Ipsum has been the industrys standard dummy text ever since the 1500s,',
            
        },

    ]
    const getRoom = rooms.find(room => room.id === id);
    return (
        <Row >
            <Col span={24} className="heading">
                <h2>Rooms Detail</h2>
            </Col>
            <Col span={12}>
                <Image width={600} height={600} src="https://s3-alpha-sig.figma.com/img/c159/e6a6/faf6e88865c840fec2dd6464688d2ee7?Expires=1684713600&Signature=lwtEicbDWXYO~vcaFbG-uInzrOtX3uwbeH~RLrVKDBpIeMswNElmFPpf2AtytVdCVeJsqIUyeBS-DNPuwa0r4mjzRYDVkHAEwOpm6r6QQPOAn~dot74cXK2aVgWEVJ0r30Ul5d-R~~Nf35HWKGmmIq7bRvl3hV1bwPiNrS-f8cy90IrOh5qRExoF8~YLk0~pVPa-~D71XwtCHtMZJhvkZDDjEQAIWiUB4M8CbhJMlt~EpgrU5SavekxrcyWAQRrSdSonmzFNfssadk0OYVsdaul3CRipACgfwbIxeo2DhPcXd-fjtOEL92s5VXdwV6PB0OfoXqVN8JBjog4OFcKUqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </Col>
            <Col span={12} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', fontSize: 20 }}>
                <p className="room__Type"> {getRoom?.roomType} Room</p>
                <Rate style={{margin: "30px 0px", padding: " 0px 10px"}} allowHalf defaultValue={5} />
                <Avatar.Group>
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                    <a href="https://ant.design">
                        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                    </a>
                    <Tooltip title="Ant User" placement="top">
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </Tooltip>
                    <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                </Avatar.Group>
                <p>{getRoom?.des}</p>
                <img className="icon-item" src="https://s3-alpha-sig.figma.com/img/135f/4dca/9ab8775ae010163c934a85816457d7f4?Expires=1684713600&Signature=eQIfj-xV~l1VjCmqB48DTbK3Uxu44reqJsTiZ55y9~OKMxiZsnjOBQuvzNSuffT9aX6P7D0g83ZygNIRyWNnZ8F8g49uyvnTi55v19rArqGwmhTBZWvkf3LzsJQh-lBVtMOkhAQ3L73khxqgqwoTyiVgnH~AHFbApBPggevjycwoES8HaYvy-WZhs2YPmifRytxTg92gMdAEYR-xZTlDsAK2NjCr2G6WHGNEFlB6oOFhLx3RdxhcXQUU8fDVRTGwkEVrwLb1MDwwv4Yiznjk2-o1kfJ6n~RHp5DIf2keYTU7bhr8vu5I-lJL0Cr-etHLMCWmN5sngKxhqBopUGJy2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
               
               
                <DatePickers />


            </Col>
        </Row>
    )
}