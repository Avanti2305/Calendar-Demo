import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Calender from "./Calender";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Calender" element={<Calender />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;