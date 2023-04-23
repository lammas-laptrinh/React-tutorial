import { createContext } from "react"
import { useState ,useEffect} from 'react';
export const AppContext = createContext({})

export const AppProvider = ({ children }: any) => {


const [userData,setUserData] = useState({})
const [isOpen, setIsOpen] = useState(false);

const [iday,setiday]= useState(false);

const themeStyle = {
  day: {
    backgroundColor: 'rgb(228, 228, 228)',
    color: 'black',
  },
  night: {
    backgroundColor: 'black',
    color: 'white',
  },
};


  useEffect(() =>{
    fetch('https://reqres.in/api/user/2')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setUserData(res.data)
    })
  },[])

  return (
    <AppContext.Provider value={{userData ,isOpen,setIsOpen,iday,setiday ,themeStyle:themeStyle[iday ? 'day' : 'night']}}>
      {children}
    </AppContext.Provider>
  )
}