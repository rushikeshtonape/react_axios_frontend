import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./layout/Navbar";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/adduser" element={<AddUser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
