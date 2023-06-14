import { Avatar, Button, Col, Rate, Row, Tooltip } from "antd";
import { Link, useParams } from "react-router-dom";
import {  DesRoom } from "../../types";
import { Image } from 'antd';
import './roomDetail.scss';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import DatePickers from "./DatePickers";
import { BsBackspace } from "react-icons/bs";
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
            <div className=""><Button style={{margin: 10, background: "#ddd"}}><Link to="/"><BsBackspace /></Link></Button></div>          
            </Col>
            <Col span={12}>
                <Image width={600} height={600} src="https://s3-alpha-sig.figma.com/img/c159/e6a6/faf6e88865c840fec2dd6464688d2ee7?Expires=1685923200&Signature=jQxCbR6j9JLU0IQ1aBECy3Gs49A3DIdfXQ6Ckv~B-koo~KrhskInEi1nZVmFrKtVXwFz0uhprCocoLX7iadyWTvKyEEuPXSdtrL170Nfr1fqKst0OLc9W0eRjTQLERMXfKYOhaSFE6jwU8wuVBdw10koEph1bM7cu8FIjF63NqsadfMpu8LPm3cIwZWhHLMWmlo78UN764KBOONh8rAeEFdCorPjC-kzOzNlEkM8q3dQ0z7VQ16yfIaV0nlT3O6j9o8YA1t4Cp1FpbpH4YPyXIef8uCb5yNPZ~X8GpNQh485hqfX~baIxfSVf7Asr3sTm-R6PtFjABWmM5VTrtHq0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </Col>
            <Col span={12} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', fontSize: 20 }}>
                <p className="room__Type"> {getRoom?.roomType}  Room</p>
                <Rate style={{margin: "30px 0px", padding: " 0px 10px"}} allowHalf defaultValue={5} />
                <div className="" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
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
               <p className="review"> {getRoom?.review}</p>
                </div>
                <p>{getRoom?.des}</p>         
                    <img className="icon-item" src="https://s3-alpha-sig.figma.com/img/135f/4dca/9ab8775ae010163c934a85816457d7f4?Expires=1685923200&Signature=ZvnPaEL3zqKWsGSpo7fLufOlVRjvVX3n1j8FMWTlid9zqXk~btZkpI5HqzbYxTMDQVnXCicNyPZXfz3MbUNTiSyHhBbT7skOGVObVcqrub0cuuivMwPa1rLSFWD906aq5SvMdvnhFPC4RWXQ1U3uuQX2knxzbhYz~S5DjhDCoH657CAEUR0LbYIaEVRXY~M5osEZJFjbTBX0AqGMfLCEALHh1i67-GR0DosZDDy~hMAWEf2jxu4qlyYO2BqMNCyTsSJ~8BpsgETGXbtmF5NAdOSMj4R~RoJrqzFB~w5XGJDCVnFJbQuTUEZ58kwryRQ~FwFjmvuzBZ22d9B8YiDVjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
               
                <DatePickers />


            </Col>
        </Row>
    )
}