import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Components/home'
import ChatPage from "./Components/chat";
import './App.css';


const App =() => (
  <BrowserRouter>
  <Routes>
    <Route exact path="/" Component={Home} />
    <Route exact path="/chat-page" Component={ChatPage} />
  </Routes>
  </BrowserRouter>
)

export default App;
