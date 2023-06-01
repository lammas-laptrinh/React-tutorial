import { Input } from 'antd';
import RoomList from '../components/RoomList';
import LineIcon from '../../../LPQT/assets/images/LineIcon.png'
import GridIcon from '../../../LPQT/assets/images/GridIcon.png'
import { firestoreDB } from '../../Firebase/firebase'
import { collection, getDocs, collectionGroup, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import '../../CSS/index.css'


export default function RoomPage() {
    const { Search } = Input;
    const [searchText, setSearchText] = useState<string>('');
    const [isGridView, setIsGridView] = useState<boolean>(true);
    //setup FireBase
    const [data, setData]: any = useState([]);
    useEffect(() => {
        const fetchCollection = async () => {
            const allRoomsQuery = query(collection(firestoreDB, "rooms"));
            const allRoomTypesQuery = collectionGroup(firestoreDB, "roomTypes");
            const allStatusQuery = collectionGroup(firestoreDB, "status");

            const [roomsSnapshot, roomTypesSnapshot, StatusSnapShot] = await Promise.all([
                getDocs(allRoomsQuery),
                getDocs(allRoomTypesQuery),
                getDocs(allStatusQuery),
               
            ]);

            const roomsData = roomsSnapshot.docs.map((doc) => doc.data());
            const roomTypesData = roomTypesSnapshot.docs.map((doc) => doc.data());
            const statusData = StatusSnapShot.docs.map((doc) => doc.data());
            const data = { rooms: roomsData, roomTypes: roomTypesData, status: statusData };
            setData(data);
        };

        fetchCollection();
    }, [firestoreDB]);
    //This is url: /room UI Page 
    return (
        <div className='RoomPageContain'>
            <div className='MainViewContainner'>
                <div className='MainViewFlex'>
                    <div className='MainViewTextTittle1'>ROOMS</div>
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
                    <RoomList rows={data} searchText={searchText} isGridView={isGridView} />
                )}
            </div>
        </div>
    );


};
