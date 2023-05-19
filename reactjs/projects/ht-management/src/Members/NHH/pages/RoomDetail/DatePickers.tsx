import {  Col,  Row, Select, } from "antd";
import { useParams } from "react-router-dom";
import {  DesRoom } from "../../Types"
import './roomDetail.scss';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
export default function DatePickers() {
    dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const customFormat: DatePickerProps['format'] = (value) =>
  `custom format: ${value.format(dateFormat)}`;

const customWeekStartEndFormat: DatePickerProps['format'] = (value) =>
  `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
    .endOf('week')
    .format(weekFormat)}`;
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
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
    const getRoom = rooms.find(room => room.id === id);
    return (
        <Row >
            <Col>
               
               <div className="Date-PickerForm">
               <RangePicker defaultValue={[dayjs('', dateFormat), dayjs('', dateFormat)]}format={dateFormat}/>
               <Select 
      defaultValue= "Adults-2"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'Adults-2', label: 'Adults-2' },
        { value: 'Adults-3', label: 'Adults-3' },
        { value: 'Adults-4', label: 'Adults-4' },
    ]}
    />
    </div>

            </Col>
        </Row>
    )
}