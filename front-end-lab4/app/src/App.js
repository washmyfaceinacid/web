import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";
import Register from "./Register";
import User from "./User";
import Service from "./Service";
import Auditorium from "./Auditorium";
import LoginRoute from "./LoginRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<LoginRoute component={User} />} />
          <Route path="/service" element={<Service />} />
          <Route
            path="/auditorium/:id"
            element={<LoginRoute component={Auditorium} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
