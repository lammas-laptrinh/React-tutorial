import React, { useEffect, useState } from 'react'
import { NewBooking } from '../types/types'
import { DocumentData, QuerySnapshot, onSnapshot } from 'firebase/firestore';
import { dashboardCollection } from '../firebase/controller';
import Table from 'react-bootstrap/Table';
function Booking() {


    const [book, setbook] = useState<NewBooking[]>([])
    useEffect(
        () =>
            onSnapshot(dashboardCollection, (snapshot: QuerySnapshot<DocumentData>) => {
                setbook(
                    snapshot.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        };
                    })
                );
            }),
        []
    );
    console.log(book, 'Dashboard')
    return (
        <div className='Book_List'>

            <h1>Booking List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Tên</th>
                        <th>Sđt</th>
                        <th>Loại phòng</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Trạng thái</th>
                        <th>Hàng động</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        book && book.length > 0 && book.map((item, index) => {
                            return (


                                <tr>
                                    <td>
                                        <img src={item.Avatar} alt="" /></td>
                                    <td>{item.Ten}</td>
                                    <td>{item.sdt}</td>
                                    <td>{item.LoaiPhong}</td>
                                    <td>{item.Checkin}</td>
                                    <td>{item.Checkout}</td>
                                    <td>{item.TrangThai}</td>
                                    <td>...</td>
                                </tr>


                            )
                        })
                    }
                    



                </tbody>
            </Table>
        </div>
    )
}

export default Booking