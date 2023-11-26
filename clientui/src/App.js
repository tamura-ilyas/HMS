import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import {BrowserRouter as Router,Routes,Route, useParams, useLocation} from 'react-router-dom'
import Login from './Pages/Login';
import Forgotpassword from './Pages/ForgotPassword';
import "react-toastify/dist/ReactToastify.css";
import AdminComplains from './Pages/Admin/AdminComplains';
import AdminDash from './Pages/Admin/AdminDash';
import { ToastContainer } from 'react-toastify';
import AdminDoctors from './Pages/Admin/AdminDoctors';
import AdminNurses from './Pages/Admin/AdminNurses';
import AdminStaff from './Pages/Admin/AdminStaff';
import AdminPatients from './Pages/Admin/AdminPatients';
import AdminAttendance from './Pages/Admin/AdminAttendance';
import AdminMain from './Pages/Admin/AdminMain';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
import { Context } from './context';
import Doctordash from './Pages/Doctor/Doctordash';
import Nursedash from './Pages/Nurse/Nursedash';
import DoctorAppointments from './Pages/Doctor/DoctorAppointments';
import DoctorNurses from './Pages/Doctor/DoctorNurses';
import DoctorProfile from './Pages/Doctor/DoctorProfile';
import DoctorAttendance from './Pages/Doctor/DoctorAttendance';
import DoctorPatients from './Pages/Doctor/DoctorPatients';
import DoctorMain from './Pages/Doctor/DoctorMain';
import NurseMain from './Pages/Nurse/NurseMain';
import NursePatients from './Pages/Nurse/NursePatients';
import NurseProfile from './Pages/Nurse/NurseProfile';
import NurseAttendance from './Pages/Nurse/NurseAttendance';
import NurseDripsInjections from './Pages/Nurse/NurseDripsInjections';
function App() { 
  const {pathname} = useLocation()
  const [search,setSearch]=useState("");
  const [filter,setfilter]=useState("");
  const { state, dispatch } = useContext(Context);

  // const getLoggedUser = ()=>{
  //   const user=localStorage.getItem("user");
  //   console.log(user);
  //   if(user){
  //     return (dispatch({
  //       type: "LOGIN",
  //       payload: JSON.parse(user)
  //    }))
  //   }else{ 
  //     return (
  //     dispatch({
  //     type: "LOGIN",
  //     payload: null,
  //  }))}
  // }
  

  // useEffect(()=>{
  //   getLoggedUser()
  // },[])

  return (
    <div >
       <ToastContainer position="bottom-center" />
     <Routes>
       
       <Route path='/' element={<Login/>} />
       <Route path='/forgot-password' element={<Forgotpassword/>} />
       <Route path='/admin/complains' element={<AdminComplains/>} />
       <Route path='/admin/Dashboard' element={<AdminMain/>} />
       <Route path='/admin/Doctors' element={<AdminDoctors/>} />
       <Route path='/admin/Nurses' element={<AdminNurses/>} />
       <Route path='/admin/Staff' element={<AdminStaff/>} />
       <Route path='/admin/Patients' element={<AdminPatients/>} />
       <Route path='/admin/Attendance' element={<AdminAttendance/>} />
       <Route path='/doctor/Dashboard' element={<DoctorMain/>} />
       <Route path='/doctor/Appointments' element={<DoctorAppointments/>} />
       <Route path='/doctor/Profile' element={<DoctorProfile/>} />
       <Route path='/doctor/Nurses' element={<DoctorNurses/>} />
       <Route path='/doctor/Attendance' element={<DoctorAttendance/>} />
       <Route path='/doctor/Patients' element={<DoctorPatients/>} />
       <Route path='/nurse/Dashboard' element={<NurseMain/>} />
       <Route path='/nurse/Patients' element={<NursePatients/>} />
       <Route path='/nurse/Profile' element={<NurseProfile/>} />
       <Route path='/nurse/Attendance' element={<NurseAttendance/>} />
       <Route path='/nurse/DripInjections' element={<NurseDripsInjections/>} />




    </Routes> 
    </div>
  );
}

export default App;
