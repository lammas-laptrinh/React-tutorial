import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Main from './Members/NHH/pages/main';
// import CheckOut from './Members/NHH/pages/CheckOut/CheckOut';
function App() {
  return (
    <BrowserRouter>
      <Main />
      {/* <CheckOut /> */}
    </BrowserRouter>
  )
}

export default App;
