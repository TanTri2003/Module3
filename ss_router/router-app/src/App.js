import logo from './logo.svg';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListComponent from './component/ListComponent';
import { Routes, Route } from "react-router-dom"
import HomeComponent from './component/Homecomponent';
import AddComponent from './component/AddComponent';
function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path={'/home'} element={<HomeComponent />}></Route>
        <Route path={'/products'} element={<ListComponent />}></Route>
        <Route path={'/products/creat'} element={<AddComponent/>}></Route>
      </Routes>
    </>
  );
}

export default App;
