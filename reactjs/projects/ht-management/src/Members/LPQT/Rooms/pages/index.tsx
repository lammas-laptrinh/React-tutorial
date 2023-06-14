import { Input } from 'antd';
import RoomList from '../components/RoomList';
import LineIcon from '../../../LPQT/assets/images/LineIcon.png'
import GridIcon from '../../../LPQT/assets/images/GridIcon.png'
import { firestoreDB } from '../../Firebase/firebase'
import { collection, getDocs,/*  doc, updateDoc  */ } from "firebase/firestore";
import { useEffect, useState } from "react";
import '../../CSS/index.css'


export default function RoomPage() {
    const { Search } = Input;
    const [searchText, setSearchText] = useState<string>('');
    const [isGridView, setIsGridView] = useState<boolean>(true);
    //setup FireBase
    const [data, setData]: any = useState([]);
    const [mapUserData, setMapUserData]: any = useState([]);
    //get all need data from firebase
    useEffect(() => {
        const fetchCollection = async () => {
            const roomDocRef = collection(firestoreDB, "rooms")
            const userDocRef = collection(firestoreDB, "users");
            const bookingDocRef = collection(firestoreDB, "booking");
            const roomTypeDocRef = collection(firestoreDB, "roomTypes");
            const statusesDocRef = collection(firestoreDB, "status");

            const [roomsSnapshot, usersSnapshot, bookingSnapshot, roomTypesSnapshot, statusesSnapShot] = await Promise.all([
                getDocs(roomDocRef),
                getDocs(userDocRef),
                getDocs(bookingDocRef),
                getDocs(roomTypeDocRef),
                getDocs(statusesDocRef),
            ]);
            const today = new Date().getTime();
            const validBookings = bookingSnapshot.docs.map((doc) => {
                const bookingId = doc.id;
                const bookingData = doc.data();
                const checkOutTime = bookingData.checkOut?.seconds * 1000;
                if (checkOutTime >= today) {
                    return {
                        ...bookingData,
                        bookingId: bookingId
                    };
                }
                return null;
            }).filter((booking: any) => booking !== null);
            /*  const latestBooking = validBookings[validBookings.length - 1];
             //update booking data
             const updateUserDocRef = doc(firestoreDB, "booking", latestBooking?.bookingId!);
             updateDoc(updateUserDocRef, {
                 statusId: '1'
             }).then(() => {
                 console.log("Data successfully updated!");
             }).catch((error) => {
                 console.error("Error updating data: ", error);
             });
             console.log('validBookings', validBookings) */
            //the Firebase roomType data
            const roomtypes = roomTypesSnapshot.docs.map((doc) => doc.data());
            //the Firebase status data
            const statuses = statusesSnapShot.docs.map((doc) => {
                const statusId = doc.id;
                const statusData = doc.data();
                return {
                    ...statusData,
                    statusId: statusId,
                };
            });
            //the Firebase rooms data
            const rooms = await Promise.all(roomsSnapshot.docs.map(async (doc) => {
                const roomId = doc.id;
                const roomData = doc.data();
                const userCheckInRef = collection(roomDocRef, roomId, 'usersCheckIn');
                const userCheckInSnapshot = await getDocs(userCheckInRef);
                const userCheckInData = userCheckInSnapshot.docs.map(checkinDoc => checkinDoc.data());
                return {
                    ...roomData,
                    roomId: roomId,
                    userCheckIn: userCheckInData,
                };
            }));
            //
            const roomShowData = { rooms: rooms, roomTypes: roomtypes, status: statuses }
            setData(roomShowData);
            //the Firebase users data
            const users = await Promise.all(usersSnapshot.docs.map(async (doc) => {
                const usersData = doc.data();
                const userId = doc.id;
                return {
                    ...usersData,
                    userId: userId,
                }
            }));
            const dataTwo = validBookings.map((booking: any) => {
                const room = rooms.find(room => room.roomId === booking.roomId) || {};
                const roomtype = roomtypes.find(roomtype => roomtype.id === booking.roomTypeId) || {};
                return { ...booking, ...room, roomTypeName: roomtype.name, statusId: booking.statusId };
            });

            const bookingsData = dataTwo.map((booking: any) => {
                const user = users.find(user => user.userId === booking.userId) || {};
                return { ...booking, user };
            });

            setMapUserData(bookingsData);
        };
        fetchCollection();
    }, [firestoreDB]);
    //This is url: /room UI Page 
    return (
        <div className='RoomPageContain'>
            <div className='MainViewContainner'>
                <div className='MainViewFlex'>
                    <div className='MainViewTextTittle1'>Rooms</div>
                    {/* this guy is the search bar */}
                    <Search className='SearchBar'
                        placeholder="Tìm kiếm..."
                        enterButton
                        onChange={(e) => setSearchText(e.target.value)} />
                    {/*  this guys is changeView Switch */}
                    <div className='ViewChangeContainer'>
                        <h2 className='MainViewTextTittle'>View: </h2>
                        <div
                            className='GridView'
                            style={{ backgroundImage: `url(${GridIcon})`, }}
                            onClick={() => setIsGridView(true)}
                        />
                        <div className='Bold'>
                            Grid
                        </div>
                        <div
                            className='LineView'
                            style={{ backgroundImage: `url(${LineIcon})`, }}
                            onClick={() => setIsGridView(false)}
                        />
                        <div className='Bold'>
                            Line
                        </div>
                    </div>
                </div>
                {data && (
                    <RoomList rows={data} searchText={searchText} isGridView={isGridView} rowUser={mapUserData} />
                )}
            </div>
        </div>
    );


};
