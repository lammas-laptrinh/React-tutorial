
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Main from './Members/TTB/pages/main';
import Room from './Members/TTB';
function App() {
  return (
    <BrowserRouter>
      <Room />
    </BrowserRouter>
  )
}

export default App;
