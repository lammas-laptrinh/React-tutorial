
import { useState, useEffect } from "react";
import "../../CSS/index.css";
import { collection, getDocs, query } from "firebase/firestore";
import { firestoreDB } from "../../Firebase/firebase";

export default function ServiceBox() {
    const [isClick, setIsClick] = useState(false);
    //setup FireBase
    const [data, setData]: any = useState([]);
    useEffect(() => {
        const fetchCollection = async () => {
            const allRoomsQuery = query(collection(firestoreDB, "services"));
            const [servicesSnapshot] = await Promise.all([
                getDocs(allRoomsQuery),
            ]);

            const serviceData = servicesSnapshot.docs.map((doc) => doc.data());
            const data = { service: serviceData };
            setData(data);
        };
        fetchCollection();
    }, [firestoreDB]);
    console.log('service', data)
    //The popUp Content
    const content = data?.service?.map((item: any, index: any) => (
       
        <div style={{ color: "white" }} key={index}>
            {item?.name}
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
                    4
                </div>
            )}
        </div>
    );
}
