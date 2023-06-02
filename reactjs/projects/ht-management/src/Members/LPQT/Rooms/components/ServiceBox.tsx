import { RoomProps } from "../type";
import { useState, useEffect } from "react";
import "../../CSS/index.css";

export default function ServiceBox({ row }: RoomProps) {
    const [isClick, setIsClick] = useState(false);
    //The popUp Content
    const content = row?.service?.map((item, index) => (
        <div style={{ color: "white" }} key={index}>
            {item?.detail}
        </div>
    ));

    //To detect when user Click outside
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleClickOutside = () => {
        setIsClick(false);
    };

    const handleServiceBoxClick = () => {
        setIsClick(!isClick);
    };

    return (
        <div className="ServiceBoxMainContain">
            {isClick ? (
                <div className="service-box-container" >
                    <div className="service-box-content">{content}</div>
                </div>
            ) : (
                <div
                    className="ServiceBoxCount"
                    onClick={handleServiceBoxClick}
                >
                    {row.serviceCount}
                </div>
            )}
        </div>
    );
}
