import { Input, Space } from 'antd';
import { UnorderedListOutlined, EllipsisOutlined } from '@ant-design/icons'
import {useContext } from 'react';
import { AppContext } from '../Context/AppContext';
const RoomsTop = () => {
    const { Search } = Input;

    const onSearch = (value: string) => console.log(value);

    const {iday,setiday}:any = useContext(AppContext)

    const toggleTheme = () =>{
        setiday(!iday)
      }

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
        }}>
            <div style={{
                display: "flex",
            }}>
                <p>Rooms</p>
                <Space direction="vertical">
                    <Search placeholder="input search text" onSearch={onSearch} enterButton />
                </Space>
            </div>
            <div>
                <ul style={{
                    display: "flex",
                }}>
                    <li
                        style={{
                            listStyle: "none",
                            marginLeft:"20px",

                        }}
                    >View: </li>
                    <li
                        style={{
                            listStyle: "none",
                            marginLeft:"20px",
                        }}
                        onClick={ toggleTheme}
                     
                    > <UnorderedListOutlined /> Grid</li>
                    <li
                        style={{
                            listStyle: "none",
                            marginLeft:"20px",
                        }}
                        onClick={ toggleTheme}
                     
                    ><EllipsisOutlined /> Line</li>
                </ul>
            </div>
        </div>
    )
}


export default RoomsTop