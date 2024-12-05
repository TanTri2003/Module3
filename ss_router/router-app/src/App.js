import logo from './logo.svg';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListComponent from './component/ListComponent';
import { Routes, Route } from "react-router-dom"
import HomeComponent from './component/Homecomponent';
import AddComponent from './component/AddComponent';
import DetailComponent from './component/DetailComponent';
function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path={'/home'} element={<HomeComponent />}></Route>
        <Route path={'/student'} element={<ListComponent />}></Route>
        <Route path={'/student/creat'} element={<AddComponent/>}></Route>
        <Route path={'/student/detail/:id'} element={<DetailComponent/>}></Route>
      </Routes>
    </>
  );
}

export default App;
