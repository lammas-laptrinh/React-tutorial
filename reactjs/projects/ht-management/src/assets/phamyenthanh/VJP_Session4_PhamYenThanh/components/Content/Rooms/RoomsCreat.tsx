import { useContext } from 'react';
import '../../../css/RoomsCreat.css'
import { AppContext } from './AppContext';

import { Button, message, Popconfirm } from 'antd';

const RoomsCreat = () => {
    const { userData ,themeStyle }: any = useContext(AppContext)
    
    console.log('check data', userData)

    return (
        <>
        <div className='Standard'>
            <p>Standard</p>
        </div>
        <div className='RoomsCreat'>
            <div style={{...themeStyle}} className='RoomsCreat-backgorup'>
                {userData.filter((room: any) => room.roomType === 'Standard')
                    .map((room: any) => {
                        return (
                            <div key={room.id}>
                                <div className='RoomsCreat-bode11'>
                                    <div className='RoomsCreat-boder'>
                                        <div className='RoomsCreat-bodertitle'>
                                            <p>
                                                {room.title}
                                            </p>

                                        </div>
                                        <div >
                                            <ul>
                                                <li> <img src={`${room.avatar}`} /> </li>
                                                <li> <img src={`${room.avatar}`} /> </li>
                                                <li> <img src={`${room.avatar}`} /> </li>
                                            </ul>
                                        </div>
                                        <div className='RoomsCreat-titme'>
                                            <p>
                                                {room.time}
                                            </p>
                                        </div>
                                    </div>
                                    <div style={{
                                        position: 'relative',
                                        left: 126,
                                        bottom: 163, marginLeft: 70, whiteSpace: 'nowrap'
                                    }}>
                                        <Popconfirm
                                            placement="top"
                                            title={''}
                                            description={room.modalContent}
                                        >
                                            {
                                                room.modal ? <Button style={{background:"#FC7D72",color:"white"}}> {room.modal}</Button> : null
                                            }
                                        </Popconfirm>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
        <div className='Standard'>
            <p>Double</p>
        </div>
        <div className='RoomsCreat'>
            <div style={{...themeStyle}} className='RoomsCreat-backgorup'>
                {userData.filter((room: any) => room.roomType === 'Double')
                    .map((room: any) => {
                        return (
                            <div key={room.id}>
                                <div className='RoomsCreat-bode11'>
                                    <div className='RoomsCreat-boder'>
                                        <div className='RoomsCreat-bodertitle'>
                                            <p>
                                                {room.title}
                                            </p>

                                        </div>
                                        <div >
                                            <ul>
                                                <li> <img src={`${room.avatar}`} /> </li>
                                                <li> <img src={`${room.avatar}`} /> </li>
                                                <li> <img src={`${room.avatar}`} /> </li>
                                            </ul>
                                        </div>
                                        <div className='RoomsCreat-titme'>
                                            <p>
                                                {room.time}
                                            </p>
                                        </div>
                                    </div>
                                    <div style={{
                                        position: 'relative',
                                        left: 126,
                                        bottom: 163, marginLeft: 70, whiteSpace: 'nowrap'
                                    }}>
                                        <Popconfirm
                                            placement="top"
                                            title={''}
                                            description={room.modalContent}
                                        >
                                            {
                                                room.modal ? <Button style={{background:"#FC7D72",color:"white"}}> {room.modal}</Button> : null
                                            }
                                        </Popconfirm>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
        <div className='Standard'>
            <p>King</p>
        </div>
        <div className='RoomsCreat'>
            <div style={{...themeStyle}} className='RoomsCreat-backgorup'>
                {userData.filter((room: any) => room.roomType === 'King')
                    .map((room: any) => {
                        return (
                            <div key={room.id}>
                                <div className='RoomsCreat-bode11'>
                                    <div className='RoomsCreat-boder'>
                                        <div className='RoomsCreat-bodertitle'>
                                            <p>
                                                {room.title}
                                            </p>

                                        </div>
                                        <div >
                                            <ul>
                                                <li> <img src={`${room.avatar}`} /> </li>
                                                <li> <img src={`${room.avatar}`} /> </li>
                                                <li> <img src={`${room.avatar}`} /> </li>
                                            </ul>
                                        </div>
                                        <div className='RoomsCreat-titme'>
                                            <p>
                                                {room.time}
                                            </p>
                                        </div>
                                    </div>
                                    <div style={{
                                        position: 'relative',
                                        left: 126,
                                        bottom: 163, marginLeft: 70, whiteSpace: 'nowrap'
                                    }}>
                                        <Popconfirm
                                            placement="top"
                                            title={''}
                                            description={room.modalContent}
                                        >
                                            {
                                                room.modal ? <Button style={{background:"#FC7D72",color:"white"}}> {room.modal}</Button> : null
                                            }
                                        </Popconfirm>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
        </>
    
    )
}

export default RoomsCreat