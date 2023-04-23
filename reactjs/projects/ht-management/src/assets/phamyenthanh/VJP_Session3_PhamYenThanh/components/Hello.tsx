import './App.css';





import { AppProvider } from '../Context/AppContext';
import Content from '@assets/phamyenthanh/VJP_Session3_PhamYenThanh/components/Content'
import Header from '@assets/phamyenthanh/VJP_Session3_PhamYenThanh/components/Header'
import Sidebar from '@assets/phamyenthanh/VJP_Session3_PhamYenThanh/components/Sidebar';
function Hello() {

  return (
    <div
      className='App'>
      <AppProvider>
        <Header />
        <Content />
        <Sidebar />
      </AppProvider>

    </div>
  );
}

export default Hello;