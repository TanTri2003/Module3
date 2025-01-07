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
import AddComponent from './component/function/AddComponent';
import EditComponent from './component/function/EditComponent';
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="" element={<LoginComponent />} />
        <Route path="/home" element={<HomeComponent/>} />
        <Route path="/home" element={<HeaderComponent/>} />
        <Route path="/home/add" element={<AddComponent/>} />
        <Route path="/home/manager" element={<ListComponent/>} />
        <Route path="/home/edit/:id" element={<EditComponent/>} />
      </Routes>
    </>
  );
}

export default App;
