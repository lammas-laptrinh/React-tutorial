import { createContext } from "react"
import { useState } from 'react';

import avatar from './Rectangle 2725.png'
export const AppContext = createContext({})

export const AppProvider = ({ children }: any) => {




    const [userData] = useState([
        { id: 1,  roomType: 'Standard',avatar:avatar ,  title: 'Phòng 01 ', time: '12/06- 18/06', modal: '3', modalContent: ['Ống nước hỏng', 'Lấy thêm đồ ăn', 'Không bật được đèn nhà tắm'], details: 'This is more detailed information about Room 1.' },
        { id: 2, roomType: 'Standard',avatar:avatar , title: 'Phòng 02', time: '12/06- 18/06', modal: "", modalContent: [], details: 'This is more detailed information about Room 2.' },
        { id: 3,roomType: 'Standard',avatar:avatar  , title: 'Phòng 03', time: '12/06- 18/06', modal: "1", modalContent: ['Ống nước hỏng'], details: 'This is more detailed information about Room 3.' },
        { id: 4,roomType: 'Standard',avatar:avatar , title: 'Phòng 04', time: '12/06- 18/06', modal: "1", modalContent: ['Lấy thêm đồ ăn'], details: 'This is more detailed information about Room 4.' },
        { id: 5,roomType: 'Standard',avatar:avatar  , title: 'Phòng 05', time: '12/06- 18/06', modal: "", modalContent: [], details: 'This is more detailed information about Room 5.' },
        { id: 6,  roomType: 'Double',avatar:avatar ,  title: 'Phòng 01 ', time: '12/06- 18/06', modal: '3', modalContent: ['Ống nước hỏng', 'Lấy thêm đồ ăn', 'Không bật được đèn nhà tắm'], details: 'This is more detailed information about Room 1.' },
        { id: 7, roomType: 'Double',avatar:avatar , title: 'Phòng 02', time: '12/06- 18/06', modal: "", modalContent: [], details: 'This is more detailed information about Room 2.' },
        { id: 8,roomType: 'Double',avatar:avatar  , title: 'Phòng 03', time: '12/06- 18/06', modal: "1", modalContent: ['Ống nước hỏng'], details: 'This is more detailed information about Room 3.' },
        { id: 9,roomType: 'Double',avatar:avatar , title: 'Phòng 04', time: '12/06- 18/06', modal: "1", modalContent: ['Lấy thêm đồ ăn'], details: 'This is more detailed information about Room 4.' },
        { id: 10,roomType: 'Double',avatar:avatar  , title: 'Phòng 05', time: '12/06- 18/06', modal: "", modalContent: [], details: 'This is more detailed information about Room 5.' },
        { id: 11,  roomType: 'King',avatar:avatar ,  title: 'Phòng 01 ', time: '12/06- 18/06', modal: '3', modalContent: ['Ống nước hỏng', 'Lấy thêm đồ ăn', 'Không bật được đèn nhà tắm'], details: 'This is more detailed information about Room 1.' },
        { id: 12, roomType: 'King',avatar:avatar , title: 'Phòng 02', time: '12/06- 18/06', modal: "", modalContent: [], details: 'This is more detailed information about Room 2.' },
        { id: 13,roomType: 'King',avatar:avatar  , title: 'Phòng 03', time: '12/06- 18/06', modal: "1", modalContent: ['Ống nước hỏng'], details: 'This is more detailed information about Room 3.' },
        { id: 14,roomType: 'King',avatar:avatar , title: 'Phòng 04', time: '12/06- 18/06', modal: "1", modalContent: ['Lấy thêm đồ ăn'], details: 'This is more detailed information about Room 4.' },
        { id: 15,roomType: 'King',avatar:avatar  , title: 'Phòng 05', time: '12/06- 18/06', modal: "", modalContent: [], details: 'This is more detailed information about Room 5.' },
        ]
)

const [iday, setiday] = useState(false);

const themeStyle = {
    day: {
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        rowGap: "0px",
        columnGap: "10px",
    },
    night: {
        display: "grid",
        rowGap: "15px",
        columnGap: "10px",


    },
};

return (
    <AppContext.Provider value={{ userData, iday, setiday, themeStyle: themeStyle[iday ? 'night' : 'day'] }}>
        {children}
    </AppContext.Provider>
)
}