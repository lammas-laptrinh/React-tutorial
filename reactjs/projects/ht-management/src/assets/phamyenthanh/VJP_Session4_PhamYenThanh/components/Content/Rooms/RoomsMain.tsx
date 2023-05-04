

import { AppProvider } from './AppContext'
import Rooms from './Rooms'
import RoomsCreat from './RoomsCreat'
import '../../../css/RoomsMain.css'
function RoomsMain() {
  return (
    <AppProvider>
      <div className='RoomsMain'>
        <div className='RoomsMain-Rooms'>
          <Rooms />
        </div>
        <div className='RoomsMain-Creat'>
          <RoomsCreat />
        </div>
      </div>
    </AppProvider>
  )
}

export default RoomsMain