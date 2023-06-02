import { useEffect, useState } from "react";
import { firestoreDB } from "../../../../firebase"
import { collection, getDocs } from "firebase/firestore";
import {content} from "../../../../HomePages"
const ListRoom = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let list: any = []
            try {
                const querySnapshot = await getDocs(collection(firestoreDB, "rooms"));
                querySnapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setData(list);
            } catch (err) {

            }
        }
        fetchData()
    }, [])

    console.log(data)


    return (<>
        {data.map((item, index) => (
            <div className="room" style={{display: "inline-block", margin:'0px 30px'}} key={index}>
               {content.map((item)=>(
                <img style={{width: 300}} src={item.Img} alt="" />
               ))}
                <div className="name" >{item.name}</div>
                <div className="des" >{item.description}</div>
            </div>

        ))}
    </>);
}

export default ListRoom;
