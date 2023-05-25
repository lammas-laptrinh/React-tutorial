import { BrowserRouter } from 'react-router-dom';
import '../src/Members/TTB/static/index.css'
import Main from './Members/TTB/pages/main';
function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  )
}

export default App;