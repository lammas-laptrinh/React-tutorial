import { Input } from 'antd';
import RoomList from '../components/RoomList';
import { useState } from 'react';
import { roomData } from '../../Constant/Global';
import LineIcon from '../../../LPQT/assets/images/LineIcon.png'
import GridIcon from '../../../LPQT/assets/images/GridIcon.png'


export default function RoomPage() {
    const { Search } = Input;
    const [searchText, setSearchText] = useState<string>('');
    const [isGridView, setIsGridView] = useState<boolean>(true);

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
                <RoomList rows={roomData} searchText={searchText} isGridView={isGridView} /> {/* fill the roomData and searchData into Props */}
            </div>
        </div>
    );


};
