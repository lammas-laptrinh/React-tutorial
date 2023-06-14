import { Button, Col, Row, Select, } from "antd";

import './roomDetail.scss';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Link } from "react-router-dom";

export default function DatePickers() {
    dayjs.extend(customParseFormat);

    const { RangePicker } = DatePicker;

    const dateFormat = 'YYYY/MM/DD';
    const weekFormat = 'MM/DD';

    /** Manually entering any of the following formats will perform date parsing */
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

    const customFormat: DatePickerProps['format'] = (value) =>
        `custom format: ${value.format(dateFormat)}`;

    const customWeekStartEndFormat: DatePickerProps['format'] = (value) =>
        `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
            .endOf('week')
            .format(weekFormat)}`;
    console.log(customFormat);
    console.log(dateFormatList);
    console.log(customWeekStartEndFormat);
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    return (
        <Row >
            <Col>

                <div className="Date-PickerForm">
                    <RangePicker style={{ width: 200, height: 30, margin: 20 }} defaultValue={[dayjs('', dateFormat), dayjs('', dateFormat)]} format={dateFormat} />
                    <Select className="select-room"
                        defaultValue="Room-2"
                        style={{ width: 200, height: 30, margin: 20 }}
                        onChange={handleChange}
                        options={[
                            { value: 'Room-2', label: 'Room-2' },
                            { value: 'Room-3', label: 'Room-3' },
                            { value: 'Room-4', label: 'Room-4' },
                        ]}
                    />
                    <Select className="select-room"
                        defaultValue="Adults-2"
                        style={{ width: 200, height: 30, margin: 20 }}
                        onChange={handleChange}
                        options={[
                            { value: 'Adults-2', label: 'Adults-2' },
                            { value: 'Adults-3', label: 'Adults-3' },
                            { value: 'Adults-4', label: 'Adults-4' },
                        ]}
                    />
                    <Select className="select-room"
                        defaultValue="Room-2"
                        style={{ width: 200, height: 30, margin: 20 }}
                        onChange={handleChange}
                        options={[
                            { value: 'Room-2', label: 'Room-2' },
                            { value: 'Room-3', label: 'Room-3' },
                            { value: 'Room-4', label: 'Room-4' },
                        ]}
                    />
                </div>
                <Button className="button-2" style={{ background: "#F1E2D3", margin: 30 }}><Link to="/Login">Chọn phòng</Link> </Button>


            </Col>
        </Row>
    )
}