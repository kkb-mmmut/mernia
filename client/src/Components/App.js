import Header from "./Header";
import Home from "./Home";  
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./Register";
function App() {
  return (
    <div className="App"> 
      <Router>
        <Header/>
        <Routes> 
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
