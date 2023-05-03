import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Main from './Members/NHH/pages/Home';
import CheckOut from '../src/Members/NHH/pages/CheckOut/CheckOut';
function App() {
  return (
    <BrowserRouter>
      <CheckOut />
    </BrowserRouter>
  )
}

export default App;
