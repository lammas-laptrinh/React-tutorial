import { RoomProps } from "../type"
import { Popover } from 'antd';
import '../../CSS/index.css'

export default function ServiceBox({ row }: RoomProps) {

    const content = (
        row?.service?.map(((item, index) => {
            return (
                <div style={{ color: 'white' }} key={index}>
                    {item?.detail}
                </div>
            )
        }))
    );
    //this guy return popUp Service to UI
    return (
        <Popover color='#FC7D72' placement="leftTop" content={content} trigger="click">
            <div className="ServiceBox">
                {row.serviceCount}
            </div>
        </Popover>
    );
}
