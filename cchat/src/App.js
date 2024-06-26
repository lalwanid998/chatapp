import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Join from './component/Join/Join';
import Chat from "./component/Chat/Chat";

function App() {
  return (
    <div className="App">
      <Router basename="chatapp">
        <Routes>
          <Route exact path="/" Component={Join}></Route>
          <Route path="/chat" Component={Chat}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
