import { RoomProps } from "../type"
import { Popover } from 'antd';

export default function ServiceBox({ row }: RoomProps) {

    //these are pop up prop data
    const text = <span>Service từ tài khoản 'Example'
    </span>;

    const content = (
        row?.service?.map(((item,index) => {
            return (
                <div>
                   {index + 1}/ {item?.serviceType?.serviceTypeName} - {item?.detail}
                </div>
            )
        }))
    );

    //this guy return popUp Service to UI
    return (
        <Popover placement="leftTop" title={text} content={content} trigger="click">
            <div
                style={{
                    height: "50px",
                    width: "50px",
                    backgroundColor: "red",
                    position: "absolute",
                    top: "-25px",
                    right: "10px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                    flexDirection: "column",
                    lineHeight: "0.2",
                    zIndex: 1,
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {row.serviceCount}
            </div>
        </Popover>
    );
}
