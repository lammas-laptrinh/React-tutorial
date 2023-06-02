import { useEffect, useState } from "react";
import { firestoreDB } from "../../../../firebase"
import { collection, getDocs } from "firebase/firestore";
import "./SuccessCheckout.css"
import { IoCheckmarkCircle } from "react-icons/io5";
import moment from 'moment';
const FetchData = () => {
    const date = moment().format("MMMM DD YYYY");
    const time = moment().format("HH mm ss");
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let list: any = []
            try {
                const querySnapshot = await getDocs(collection(firestoreDB, "bill"));
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
        <div className="bill">
            {data.map((item) => (
                <div className="bill-item">
                    <div className="bill-top">
                        <div className="bill-icon">
                            <div className="cricle">
                            <div className="icon"><IoCheckmarkCircle /></div>
                            </div>
                        </div>
                        <div className="bill-title">Payment success</div>
                        <div className="bill-price">{item.amount} $</div>
                        <div className="hr"><hr /></div>
                    </div>

                    <div className="bill-mid">
                    <div style={{ padding: "25px 200px 0px 200px",display: "flex", justifyContent : 'space-between'}} ><p className="bill-paymentId" >paymentId</p> <p className="data">{item.paymentId} </p></div>
                    <div style={{ padding: "10px 200px",display: "flex", justifyContent : 'space-between'}} ><p className="bill-paymentId" >payment Time</p> <p className="data">{date}: {time} </p></div>
                    <div style={{ padding: "10px 200px",display: "flex", justifyContent : 'space-between'}} ><p className="bill-paymentId" >payment Method</p> <p className="data">{item.paymentMethod} </p></div>
                    <div style={{ padding: "10px 200px",display: "flex", justifyContent : 'space-between'}} ><p className="bill-paymentId" >sender</p> <p className="data">{item.paymentId} </p></div>
                    <div className="hr1">---------------------------------------------------------------------------------------------------------------------</div>
                    </div>
                    <div className="bill-bottom">
                    <div style={{ padding: "25px 200px 0px 200px",display: "flex", justifyContent : 'space-between'}} ><p className="bill-paymentId" >Amount</p> <p className="data">{item.amount}$ </p></div>

                    </div>
                </div>
            ))}


        </div></>);
}

export default FetchData;