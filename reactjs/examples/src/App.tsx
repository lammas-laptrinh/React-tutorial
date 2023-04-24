import "./App.css";
import Demo from "@src/ContextApi";
import { Provider } from "./ContextApi/context";

function App() {
  return (
    <Provider>
      <Demo></Demo>
    </Provider>
  );
}

export default App;
