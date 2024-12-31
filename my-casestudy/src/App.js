import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import LoginComponent from './component/login/LoginComponent';
import HomeComponent from './component/home/HomeComponent';
import ListComponent from './component/manager/ListComponent';
import HeaderComponent from './component/header/HeaderComponent';
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="" element={<LoginComponent />} />
        <Route path="/home" element={<HomeComponent/>} />
        <Route path="/home" element={<HeaderComponent/>} />
        <Route path="/home/manager" element={<ListComponent/>} />
      </Routes>
    </>
  );
}

export default App;
