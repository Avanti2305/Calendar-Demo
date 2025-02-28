import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import NotFound from './component/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import SignIn from './SignIn';
import CalendarComponent from "./CalendarComponent";
import AddEvent from "./AddEvent";   
import AdminDashboard from "./AdminDashboard";
import Adminpage from "./Adminpage";
import ViewPage from './Viewpage';
import UserDash from './UserDash';  
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CalendarComponent />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/AddEvent" element={<AddEvent />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/Adminpage" element={<Adminpage />} />   
        <Route path="/Viewpage/:candidateId" element={<ViewPage />} />
        <Route path="/UserDash" element={<UserDash />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;