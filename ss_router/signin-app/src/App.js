import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import LoginComponent from './component/LoginComponent';
import ListComponent from './component/ListComponent';
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<LoginComponent />} />
        <Route path="/home" element={<ListComponent />} />
      </Routes>
    </>
  );
}

export default App;
