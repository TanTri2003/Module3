import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import ListComponent from './component/ListComponent';
import DetailComponent from './component/DetailComponent';
import AddComponent from './component/AddComponent';
import EditComponent from './component/EditComponent';
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
      <Route path={''} element={<ListComponent />}></Route>
      <Route path={'/detail/:id'} element={<DetailComponent />}></Route>
      <Route path={'/creat'} element={<AddComponent />}></Route>
      <Route path={'/edit/:id'} element={<EditComponent />}></Route>
      </Routes>
    </>

  );
}

export default App;
