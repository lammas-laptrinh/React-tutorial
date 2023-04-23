
import {useContext} from 'react'
import { AppContext } from '../Context/AppContext'


export default function UserInformation() {

  const { userData ,test }:any =useContext(AppContext)

    console.log('Check userData ' ,userData,'Check test' ,test)

  return (
    <>

    <h5>User Information</h5>
     <p>{userData.name}</p>
     </>
    
  )
}
