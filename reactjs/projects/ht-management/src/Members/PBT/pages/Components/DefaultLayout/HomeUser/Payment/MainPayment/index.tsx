import { useState } from "react";
import { PaymentDetailItemProps } from "../type";
import 'react-toastify/dist/ReactToastify.css';
import { Button, Input, Image, Row, Col } from "antd";
import { toast, ToastContainer } from 'react-toastify';
import PaypalPayment from "./Paypal";
import {
    collection, addDoc, Timestamp 

} from "firebase/firestore";
import { db } from "../../../firebase";


import './Payment.css'

export default function Payment(props: PaymentDetailItemProps) {
    const [email, setEmail] = useState('')
    const [card, setCard] = useState('')
    const [expiry_date, setExpiry_date] = useState('')
    const [cvv, setCvv] = useState('')
    const [showPaypal, setShowPaypal] = useState(false);


    const url = window.location.href;
    const parts = url.split("/");
    const typeroom = parts[parts.length - 2];
    const userId = localStorage.getItem('loginaccount')
    const endDate = localStorage.getItem('endDate')
    const startEnd = localStorage.getItem('startDate')

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    localStorage.setItem('dateTimeNow',formattedDate);
    let startDateTime:any = null;
    let endDateTime:any = null;
    const DateTimeNow = Timestamp.fromDate(new Date(formattedDate));
    if (startEnd !== null) {
        startDateTime = Timestamp.fromDate(new Date(startEnd));
    }
    if (endDate !== null) {
        endDateTime = Timestamp.fromDate(new Date(endDate));
    }


    const validate = () => {
        if (!email) {
            toast.error('Trường email không được trống!')
            return false;
        }
        else if (!card) {
            toast.error('Trường Credit Card Number không được trống!')
            return false;
        }
        else if (!expiry_date) {
            toast.error('Trường Expiry Date không được trống!')
            return false;
        }
        else if (!cvv) {
            toast.error('Trường CVV không được trống!')
            return false;
        }
        return true;
    }

    // const [servies, setServices] = useState<any[]>([]);
    // useEffect(() => {
    //     const colRef: CollectionReference = collection(db, 'booking');
    //     const unsubscribe = onSnapshot(
    //         colRef,
    //         (snapshot) => {
    //             const respon = snapshot.docs.map((doc) => {
    //                 return doc.data();
    //             });
    //             setServices(respon);
    //         },
    //         (error) => {
    //             console.log(error);
    //         }
    //     );
    //     return () => unsubscribe();
    // }, []);
    // console.log(servies);

    const handleClick = async () => {
        if (validate()) {
            setShowPaypal(!showPaypal);

            const bookingCollection = collection(db, "booking");
            try {
                const docRef = await addDoc(bookingCollection, {
                    checkIn: startDateTime,
                    checkOut: endDateTime,
                    createAt: DateTimeNow,
                    createBy: '1',
                    roomTypeId: typeroom,
                    statusId: '1',
                    userId: userId,
                    // Add other booking data properties as needed
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (error) {
                console.error("Error adding document: ", error);
            }
            
            // thêm item vào userCheckIn để demo
            // const usersCheckInCollection = collection(db, "rooms", roomId, "usersCheckIn");
            // try {
            //   const docRef = await addDoc(usersCheckInCollection, {
            //     checkIn: startDateTime,
            //     checkOut: endDateTime,
            //     userId: '1',
            //     // Add other booking data properties as needed
            //   });
            //   console.log("Document written with ID: ", docRef.id);
            // } catch (error) {
            //   console.error("Error adding document: ", error);
            // }
            
            
        
            // Dùng để xóa item trong booking khi add những booking lỗi
            // const bookingCollection = collection(db, "booking");
            // const snapshot = await getDocs(bookingCollection);
            // const docs = snapshot.docs;
            

            // if (docs.length >= 10) {
            //   const docId = docs[8].id; // Lấy ID của mục tại vị trí số 2
            //   try {
            //     await deleteDoc(doc(db, "booking", docId));
            //     console.log("Document deleted successfully");
            //   } catch (error) {
            //     console.error("Error deleting document: ", error);
            //   }
            // }

        }
    };

    if (showPaypal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div className="payment-container">
            <Row className="payment-container-item">
                <Row className="title">
                    <h3>Payment details</h3>
                </Row>
                <Col className="payment-items-wrapper">
                    <div className="payment-items">
                        <span className="span-info">Email</span>
                        <Input className="input-info" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="payment-items card">
                        <span className="span-info">Card Number</span>
                        <Input className="input-info" placeholder="xxxx xxxx xxxx xxxx" value={card} onChange={(e) => setCard(e.target.value)} />
                    </div>
                    <div className="payment-items wrapper">
                        <div className="expriry-date">
                            <span className="span-info">Expiry Date</span>
                            <Input className="input-date-cvv" placeholder="mm/yy" value={expiry_date} onChange={(e) => setExpiry_date(e.target.value)} />
                        </div>
                        <div className="cvv">
                            <span className="span-info">CVV</span>
                            <Input className="input-date-cvv" value={cvv} placeholder="xxx" onChange={(e) => setCvv(e.target.value)} />
                        </div>
                    </div>
                    <ToastContainer />
                </Col>
                <div className="total-Amount">
                    <div className="total-items subtotal">
                        <span className="total-span-title">Subtotal</span>
                        <span className="total-span">${props.subtotal}</span>
                    </div>
                    <div className="total-items platform">
                        <span className="total-span-title" >Platform Fee</span>
                        <span className="total-span">${props.discount}</span>
                    </div>
                    <div className="border-payment"></div>
                    <div className="total-items total">
                        <span className="total-span-title">Total Amount</span>
                        <span className="total-span">${props.total}</span>
                    </div>
                </div>
                {showPaypal && (
                    <PaypalPayment total={10} setShowPaypal={setShowPaypal} showPaypal={showPaypal} />
                )}
                <div className="action-buttons">
                    <Button style={{ color: '#ffffff' }} type="primary" onClick={handleClick}>Thanh toán</Button>
                </div>
            </Row>

            <div className="introduce-wrapper-payment">
                <Row className="room-info">
                    <Col className="room-banner-payment">
                        <Image className="room-avatar" src="https://res.cloudinary.com/dpdzbuiml/image/upload/v1684831746/pexels-pixabay-210604_r4yrjj.jpg" />
                    </Col>
                    <Col className="room-detail-payment">
                        <Row className="roomtype-payment">
                            <Col span={24}>
                                <h2 className="title-room-payment">{props.roomtype}</h2>
                                <p>{props.description}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} className="border-payment"></Col>
                        </Row>
                        <Row className="room-service-date">
                            <Row className="service" >
                                <label>Dịch vụ</label>
                                <span className="service-date-span">{props.service}</span>
                            </Row>
                            <Row className="date">
                                <label>Thời gian</label>
                                <span className="service-date-span">{startEnd} - {endDate}</span>
                            </Row>
                        </Row>
                        <Row>
                            <Col span={24} className="border-payment"></Col>
                        </Row>
                        <Row className="room-icon">
                            <img className="icon-room" src="https://ss6-paypal.vercel.app/assets/tick-8cbc4407.svg" />
                            <span className="span-secure">Secure Payment</span>
                        </Row>
                    </Col>
                </Row>
            </div>

        </div>
    );

}