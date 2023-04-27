import { Input, Button } from 'antd';
import RoomList from '../components/RoomList';
import { useState } from 'react';
import { roomData } from '../../Constant/Global';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';


export default function RoomPage() {
    const { Search } = Input;
    const [searchText, setSearchText] = useState<string>('');
    const [isGridView, setIsGridView] = useState<boolean>(true);

    //This is url: /room UI Page 
    return (
        <div style={{ backgroundColor: '#ede2e1', minHeight: '100vh', overflow: 'hidden' }}>

            <div className='MainViewContainner'>
                <div className='MainViewFlex'>
                    <div className='MainViewTextTittle'>ROOMS</div>
                    {/* this guy is the search bar */}
                    <Search style={{ maxWidth: '200px' }}
                        placeholder="Tìm kiếm..."
                        enterButton
                        onChange={(e) => setSearchText(e.target.value)} />
                    {/*  this guys is changeView Switch */}
                    <div className='ViewChangeContainer'>
                        <h2 className='MainViewTextTittle'>View: </h2>
                        <Button className='marginRight10' onClick={() => setIsGridView(false)} icon={<UnorderedListOutlined />} >
                            Line
                        </Button>
                        <Button onClick={() => setIsGridView(true)} icon={<AppstoreOutlined />}>
                            Grid
                        </Button>
                    </div>
                </div>
                <RoomList rows={roomData} searchText={searchText} isGridView={isGridView} /> {/* fill the roomData and searchData into Props */}
            </div>
        </div>
    );


};
