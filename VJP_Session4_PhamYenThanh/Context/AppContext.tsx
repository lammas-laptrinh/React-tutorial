import { createContext } from "react"
import { useState, useEffect } from 'react';
export const AppContext = createContext({})

export const AppProvider = ({ children }: any) => {


  const [userData, setUserData] = useState([
    { id: 1, phong: "Phong1", dates: "12/06-18/06" },
    { id: 2, phong: "Phong2", dates: "12/06-18/06" },
    { id: 3, phong: "Phong3", dates: "12/06-2h" },
    { id: 4, phong: "Phong4", dates: "12/06-18/6" },
    { id: 5, phong: "Phong5", dates: "12/06-18/6" },
  ]
  )
  const [isOpen, setIsOpen] = useState(false);

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
    <AppContext.Provider value={{ userData, iday,setiday ,themeStyle:themeStyle[iday ? 'day' : 'night']}}>
      {children}
    </AppContext.Provider>
  )
}